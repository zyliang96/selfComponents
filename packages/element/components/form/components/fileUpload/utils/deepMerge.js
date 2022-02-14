import {isPlainObject} from './check'


/**
 * @des 深度合并简易实现，只会深度合并纯对象，其余类型将会覆盖
 * */
function mergeObj(target, source) {
  Object.keys(source).forEach(key => {
    if (isPlainObject(target[key]) && isPlainObject(source[key])) {
      mergeObj(target[key], source[key])
    } else if (source[key]) {
      target[key] = source[key]
    }
  })
  return target
}

export function deepMerge(target, source) {
  if (!Array.isArray(target)) {
    return mergeObj(target, source)
  } else {
    return target.reduce((prev, next) => {
      return mergeObj(prev, next)
    }, {})
  }
}






