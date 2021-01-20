import { parsePath } from "./PathUtils";
import { getUniqueKey, valueEqual } from "./index";
import { isString } from "./index";
/**
 * 创建location
 * {
 *     pathname:'页面地址',
 *     search:'查询条件',
 *     hash:'hash值',
 *     state:'状态，类似history的state',
 *     key:'唯一值',
 * }
 * 使用的两种场景：1、history.push 2、history.replace，这两种场景都支持传入一个字符串或者是一个对象
 * @param {Object}} params
 */
export function createLocation(params) {
  const {
    path, // 地址
    key = getUniqueKey(), // 唯一值
    state = "", // 状态参数
  } = params;
  const basePathInfo = parsePath(path);
  return {
    ...basePathInfo,
    key,
    state,
  };
}

/**
 * 判断两个locationObj是否相等
 * @param {*} a
 * @param {*} b
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
