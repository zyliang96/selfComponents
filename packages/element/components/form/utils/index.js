import qs from "qs";
export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isFunction(fn) {
  return typeof fn === "function";
}

export function noop() {}

let toString = Object.prototype.toString;

export function isObject(obj) {
  return (
    obj && typeof obj === "object" && toString.call(obj) === "[object Object]"
  );
}

export function isEmptyArray(arr) {
  return arr === null || arr === undefined || arr.length === 0;
}

export function isArray(arr) {
  return (
    arr &&
    typeof arr === "object" &&
    Object.prototype.toString.call(arr) === "[object Array]"
  );
}

export function isDef(obj) {
  return obj !== undefined;
}

export function isUndef(obj) {
  return obj === undefined;
}

export function arr_splice(array, subGroupLength) {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}

export function clearImage(html) {
  let clearImage = /<img[^>]*>/g;
  return html.replace(clearImage, "");
}

/**
 * 格式化数字数据,三个加一个逗号
 */
export function formatNum(num) {
  let numString = (num || 0).toString();
  let result = "";
  while (numString.length > 3) {
    result = "," + numString.slice(-3) + result;
    numString = numString.slice(0, numString.length - 3);
  }
  if (numString) {
    result = numString + result;
  }
  return result;
}

export function toChineseNum(num) {
  num = num.toString();
  //202
  const changeNum = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];
  const unit = ["", "十", "百", "千", "万"];
  let result = "";
  for (let i = 0; i < num.length; i++) {
    let current = num.charAt(i);
    if (i === num.length - 1 && current === "0") {
      // 最后一位是零
      continue;
    }
    if (num.length === 2 && i === 0 && current === "1") {
      //只有两位的十位
      result = unit[current];
      continue;
    }
    if (current === "0") {
      result = result + changeNum[current];
      continue;
    }
    result = result + changeNum[current] + unit[num.length - i - 1];
  }
  return result;
}
/**
 * 检查是否为数字
 */
export function checkIsNumber(value) {
  if (value && value.trim()) {
    const reg = /^\d*$/;
    if (reg.test(value)) {
      return value;
    } else {
      return undefined;
    }
  }
  return undefined;
}


export function makeUUID() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] && 0x3) || 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = "-";
  s[13] = "-";
  s[18] = "-";
  s[23] = "-";

  return s.join("");
}
