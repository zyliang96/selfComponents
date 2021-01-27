import { pathToRegexp } from "../utils/path-to-regexp";
/**
 * 缓存判断过的数据
 */
let cache = {};
let cachePathList = [];
const cacheLimit = 10000;
let cacheCount = 0;
/**
 * 比较判断path
 * @param {*} path
 * @param {*} options
 */
export function compilePath(path, options = {}) {
  if (cache[path]) {
    return cache[path];
  }
  let keys = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  if (cacheCount < cacheLimit) {
    cache[path] = result;
    cachePathList.push(path);
    cacheCount++;
  } else {
    // 这里采用操作系统的缓存算法，考虑到整体的复杂度，感觉还是使用先进先出算法(FIFO)容易一点，可以考虑其他缓存算法
    const removePath = cachePathList.shift();
    delete cache[removePath];
    cache[path] = result;
    cachePathList.push(path);
  }
  return result;
}

/**
 * 判断是否符合路由条件
 * @param {*} path
 * @param {*} target
 */
export function matchPath(locationPath, options = {}) {
  if (typeof options === "string" || Array.isArray(options)) {
    options = { path: options };
  }
  const {
    path, // 地址
    exact = false, // 用于匹配结尾
    strict = false, // 详细匹配
    sensitive = false, // 大小写敏感,true 不区分 false区分
  } = options;

  // 避免options 是 数组的情况
  const paths = [].concat(path);
  // 只处理数组的第一个，其他
  return paths.reduce((matched, path) => {
    if (!path && path !== "") return null;
    if (matched) return matched;
    const options = {
      end: exact,
      strict,
      sensitive,
    };
    // 生成path的正则表达式
    const { regexp, keys } = compilePath(path, options);

    // 判断是否匹配路由哦
    const match = regexp.exec(locationPath);

    if (!match) return null;
    // 第一个值是匹配到的url内容，后面的对应:test 这种动态路由的值
    const [url, ...values] = match;
    const isExact = locationPath === url;

    // 不匹配的时候返回null
    if (exact && !isExact) return null;
    // TODO 这里需要考虑一个问题，如果存在两个都能匹配到的路由的时候，优先级是怎么样的
    return {
      path, // the path used to match
      url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
      isExact, // whether or not we matched exactly
      params: keys.reduce((memo, key, index) => {
        // 生成params对象
        memo[key.name] = values[index];
        return memo;
      }, {}),
    };
  }, null);
}
