import { getUniqueKey } from "./index";

export function createLocation(params = {}) {
  const {
    path, // 地址
    basename, //
    key = getUniqueKey(), // 唯一值
    state = {
      index: 0,
    }, // 状态参数
  } = params;
  const basePathInfo = parsePath(path, basename);
  return {
    ...basePathInfo,
    key,
    state,
  };
}

/**
 * 解析路径
 * @param {*}} path
 */
export function parsePath(path, basename) {
  let pathname = path || "/";
  let search = "";
  let hash = "";

  // 先过滤hash值，然后再过滤search的内容

  const hashIndex = pathname.indexOf("#");
  // 存在hash值
  if (hashIndex > -1) {
    // hash值
    hash = pathname.substr(hashIndex);
    // pathname 值
    pathname = pathname.substr(0, hashIndex);
  }

  const searchIndex = pathname.indexOf("?");
  if (searchIndex > -1) {
    // search 值
    search = pathname.substr(searchIndex);
    // pathname 值
    pathname = pathname.substr(0, searchIndex);
  }

  pathname = stripBasename(pathname, basename);

  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash,
  };
}

// 创建path
export function createPath(location = {}) {
  const { pathname, search, hash } = location;

  let path = pathname || "/";

  if (search && search !== "?")
    path += search.charAt(0) === "?" ? search : `?${search}`;

  if (hash && hash !== "#") path += hash.charAt(0) === "#" ? hash : `#${hash}`;

  return path;
}

// 是否包含basename
export function hasBasename(path = "", prefix = "") {
  return (
    path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 &&
    "/?#".indexOf(path.charAt(prefix.length)) !== -1
  );
}

// 去除basename
export function stripBasename(path = "", prefix = "") {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

/**
 * 获取basename
 */
export function getBaseHref() {
  let base = document.querySelector("base");
  let href = "";

  if (base && base.getAttribute("href")) {
    let url = window.location.href;
    let hashIndex = url.indexOf("#");
    href = hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  return href;
}
