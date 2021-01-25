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
  let result = null;

  

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
  }, null);
  const reg = /^\/((:?)\S+)/;
  const locationPathMatch = locationPath.match(reg);
  const targetPathMatch = targetPath.match(reg);
  console.log(locationPathMatch);
  console.log(targetPathMatch);

  return locationPathMatch[1] === targetPathMatch[1];
}
