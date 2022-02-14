/**
 * 观察者类型
 * 模仿formily的生命周期
 */
export const observerType = {
  reset: "ON_FORM_RESET", // 重置
  valueChange: "ON_FORMITEM_VALUE_CHANGE", // 数值修改
  validateDataError: "ON_FORM_VALIDATA_ERROR", // 校验到数据不正确时
  componentPropsChange: "ON_FORM_COMPONENT_PROPS_CHANGE", // 组件的prop改变，主要用于
  componentStateChange: "ON_FORM_COMPONENT_STATE_CHANGE", // 组件的状态改变，如现隐变化
  
};
