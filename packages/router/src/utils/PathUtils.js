// 添加首部的 /
export function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}
// 去除首部的 /
export function stripLeadingSlash(path) {
  return path.charAt(0) === "/" ? path.substr(1) : path;
}
// 去除尾部的 /
export function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === "/" ? path.slice(0, -1) : path;
}

// 是否包含basename
export function hasBasename(path, prefix) {
  return (
    path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 &&
    "/?#".indexOf(path.charAt(prefix.length)) !== -1
  );
}

// 去除basename
export function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

// 创建path
export function createPath(location) {
    const { pathname, search, hash } = location;
  
    let path = pathname || '/';
  
    if (search && search !== '?')
      path += search.charAt(0) === '?' ? search : `?${search}`;
  
    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : `#${hash}`;
  
    return path;
  }

/**
 * 解析路径
 * @param {*}} path
 */
export function parsePath(path) {
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

  return {
    pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash,
  };
}
