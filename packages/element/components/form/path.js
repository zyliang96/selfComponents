import { isObject } from "./utils";
import { dataTypeEnum } from "./const";
/**
 *  判断是否是数组
 */
function isArray(str) {
  const reg = /^\d+|\*$/;
  return reg.test(str);
}
const includeReg = /^\((\S+)\)$/; // (a,b,c)形式的正则
/**
 * 解析地址
 */
function resolve(pathList, list, index, target, sourceData) {
  if (index === pathList.length) {
    return list;
  }
  if (isArray(pathList[index])) {
    if (sourceData && sourceData.type === dataTypeEnum.array) {
      const len = sourceData.itemLength || 1;
      let arrayList = [];
      if (pathList[index] === "*") {
        for (let i = 0; i < len; i++) {
          const newPath = `[${i}]`;
          arrayList.push(newPath);
        }
      } else {
        const newPath = `[${pathList[index]}]`;
        arrayList.push(newPath);
      }

      return resolve(pathList, arrayList, index + 1, target);
    } else {
      let arrayList = [];
      list.forEach((item) => {
        if (target[item] && target[item].type === dataTypeEnum.array) {
          const len = target[item].itemLength || 1;
          if (pathList[index] === "*") {
            for (let i = 0; i < len; i++) {
              const newPath = item + `[${i}]`;
              arrayList.push(newPath);
            }
          } else {
            const newPath = item + `[${pathList[index]}]`;
            arrayList.push(newPath);
          }
        } else {
          const newPath = item + `.${pathList[index]}`;
          arrayList.push(newPath);
        }
      });
      return resolve(pathList, arrayList, index + 1, target);
    }
  } else if (includeReg.test(pathList[index])) {
    let arrayList = [];
    const splitList = pathList[index].split(includeReg);
    const stringlist = splitList[1].split(",");
    list.forEach((item) => {
      stringlist.forEach((key) => {
        const newPath = item + `.${key}`;
        arrayList.push(newPath);
      });
    });
    return resolve(pathList, arrayList, index + 1, target);
  } else {
    let arrayList = [];
    list.forEach((item) => {
      const newPath =
        index === 0 ? pathList[index] : item + `.${pathList[index]}`;
      arrayList.push(newPath);
    });
    return resolve(pathList, arrayList, index + 1, target);
  }
}

export function resolvePath(path, target, sourceData) {
  const list = path.split(".");
  let result = resolve(list, [].concat(list[0]), 0, target, sourceData);
  return result;
}
