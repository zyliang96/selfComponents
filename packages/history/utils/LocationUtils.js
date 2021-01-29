import { getUniqueKey, valueEqual } from "./index";

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
  let locationResult = {
    pathname: "/",
    search: "",
    hash: "",
  };

  if (typeof path === "string") {
    locationResult.pathname = path || "/";
  } else {
    locationResult = Object.assign(locationResult, { ...path });
  }

  // 先过滤hash值，然后再过滤search的内容

  const hashIndex = locationResult.pathname.indexOf("#");
  // 存在hash值
  if (hashIndex > -1) {
    // hash值
    locationResult.hash = locationResult.pathname.substr(hashIndex);
    // pathname 值
    locationResult.pathname = locationResult.pathname.substr(0, hashIndex);
  }

  const searchIndex = locationResult.pathname.indexOf("?");
  if (searchIndex > -1) {
    // search 值
    locationResult.search = locationResult.pathname.substr(searchIndex);
    // pathname 值
    locationResult.pathname = locationResult.pathname.substr(0, searchIndex);
  }

  locationResult.pathname = stripBasename(locationResult.pathname, basename);

  return {
    pathname: locationResult.pathname,
    search: locationResult.search === "?" ? "" : locationResult.search,
    hash: locationResult.hash === "#" ? "" : locationResult.hash,
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

/**
 * location 比较
 */
export function locationsAreEqual(a, b) {
  return (
    a.pathname === b.pathname &&
    a.search === b.search &&
    a.hash === b.hash &&
    a.key === b.key &&
    valueEqual(a.state, b.state)
  );
}
