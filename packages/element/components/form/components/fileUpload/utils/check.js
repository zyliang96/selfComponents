export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isFunction(fn) {
  return typeof fn === 'function';
}

export function isEmptyArray(arr) {
  return arr === null || arr === undefined || arr.length === 0;
}

export function isArray(arr) {
  return arr && typeof arr === 'object' && Object.prototype.toString.call(arr) === '[object Array]';
}
export function isFileList(arr) {
  return arr && typeof arr === 'object' && Object.prototype.toString.call(arr) === '[object FileList]';
}
export function isDef(obj) {
  return obj !== undefined;
}

export function isUndef(obj) {
  return obj === undefined;
}

let toString = Object.prototype.toString;
export function isObject(obj) {
  return obj && typeof obj === 'object' && toString.call(obj) === '[object Object]';
}
export function noop() {}

export function isBoolean(boolean) {
  return typeof boolean === 'boolean';
}

export function isString(string) {
  return typeof string === 'string';
}

export function isNumber(n) {
	return typeof n === 'number';
}