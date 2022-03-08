import React from "react";
/**
 * size 枚举类型
 */
export enum SizeEnum {
  large = "large", // 大
  default = "default", // 默认
  small = "small", // 小
}

/**
 * 组件基本的props
 */
export interface BaseProps {
  /**
     * @description 样式
     * @default
     * */
  className?: string;
  /**
   * @description 设置内联样式，例如 fontSize 和 color
   * @default
   * */
  style?: object;
  /**
   * @description 样式前缀
   * @default
   * */
  prefixCls?: String;
}



export interface BaseObject {
  [key: string]: any
}