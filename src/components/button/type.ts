import React from "react";
import { BaseProps } from "../../types";
/**
 * shape 枚举类型
 */
export enum ShapeEnum {
  circle = "circle", // 圆形按钮
  round = "round", // 圆角按钮
  default = "default", // 默认
}

/**
 * button的类型
 */
export enum ButtonTypeEnum {
  primary = "primary", // 实心按钮
  link = "link", // link 文本
  dashed = "dashed", // 虚线
  default = "default", // 默认
}

/**
 * button props参数
 */
export interface ButtonProps extends BaseProps {
  block?: boolean; // 宽度是否根据父组件决定
  disabled?: boolean; // 是否可以点击
  icon?: React.ReactNode; // icon 图标
  loading?: boolean; // 加载
  shape?: ShapeEnum; // 按钮形状
  type?: ButtonTypeEnum; // 按钮类型
  onClick?: (event?: React.event) => void; // 点击事件
}
