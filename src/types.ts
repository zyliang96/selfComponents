import React from "react";
/**
 * size 枚举类型
 */
export enum SizeEnum {
  large = "large", // 大
  middle = "middle", // 中
  small = "small", // 小
}

/**
 * 组件基本的props
 */
export interface BaseProps {
  size?: SizeEnum; // 大小
  children?: React.ReactChild;
}
