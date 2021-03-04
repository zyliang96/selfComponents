import { enumValueType } from "../config/index";
/**
 * 创建事件队列
 */
export function createEventList(options = {}) {
  const { isNeedResult = false, removeCallback } = options;
  let list = [];

  return {
    get length() {
      return list.length;
    },
    push(fn) {
      list.push(fn);
      return () => {
        list = list.filter((item) => item !== fn);
        if (!list.length) {
          removeCallback && removeCallback();
        }
      };
    },
    call(arg) {
      let result = true;
      for (let i = 0, len = list.length; i < len; i++) {
        const fn = list[i];
        result = fn && fn(arg);
        if (isNeedResult && !result) {
          break;
        }
      }
      return result;
    },
  };
}

/**
 * 获取唯一key
 */
export function getUniqueKey(baseData = "") {
  const timeStr = Date.now().toString(32);
  let key = timeStr + baseData.toString();
  let newKey = [];
  let verificationData = 1; // 校验码位置
  let newKeyIndex = 0;
  // 采用海伦校验码原理处理
  for (let j = 1, len = key.length; j <= len; j++) {
    if (j === verificationData) {
      newKey[newKeyIndex] = String.fromCharCode(
        65 + Math.floor(Math.random() * 0x16)
      );
      newKeyIndex++;
      verificationData = 2 * verificationData;
    }
    newKey[newKeyIndex] = key[j - 1];
    newKeyIndex++;
  }

  return newKey.join("");
}

export function isObject(obj) {
  return (
    obj && typeof obj === "object" && toString.call(obj) === "[object Object]"
  );
}

/**
 * 获取数据类型
 * 这里只考虑基本数据类型，symbol等不在考虑范畴内
 */
export function getValueType(val) {
  let type = enumValueType.basic;
  if (isObject(val)) {
    type = enumValueType.object;
  }
  if (Array.isArray(val)) {
    type = enumValueType.array;
  }
}
/**
 * 比较两个值是否相等
 * @param {*} A
 * @param {*} B
 */
export function valueEqual(valueA, valueB) {
  const valueAType = getValueType(valueA);
  const valueBType = getValueType(valueB);

  // 类型不相等的肯定不一样
  if (valueAType !== valueBType) {
    return false;
  }

  // 基础类型直接全等判断
  if (valueAType === enumValueType.basic) {
    return valueA === valueB;
  }

  // 对象的递归调用
  if (valueAType === enumValueType.object) {
    const keys = Object.keys(valueA);
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const isEqual = valueEqual(valueA[key], valueB[key]);
      if (!isEqual) {
        return false;
      }
    }
  }
  // 数组先判断长度，然后再判断每一个值
  if (valueAType === enumValueType.array) {
    if (valueA.length === valueB.length) {
      for (let i = 0, len = valueA.length; i < len; i++) {
        const isEqual = valueEqual(valueA[i], valueB[i]);
        if (!isEqual) {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  return false;
}

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
