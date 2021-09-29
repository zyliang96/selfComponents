import React from "react";

/**
 * 默认的获取前缀
 * 有自定义的就使用自定义的，否则拼装
 */
const defaultGetPrefixCls = (
    suffixCls?: string,
    customizePrefixCls?: string
) => {
    if (customizePrefixCls) return customizePrefixCls;

    return suffixCls ? `ant-${suffixCls}` : "ant";
};
/**
 * 配置的Context
 */
export const ConfigContext = React.createContext<any>({
    getPrefixCls: defaultGetPrefixCls,
});
