import React, { useEffect, useRef, useState } from "react";
import "./index.less";
import { ButtonProps, ShapeEnum, ButtonTypeEnum } from "./type";
import { staticFunction } from "../../utils/index";

function Button(props: ButtonProps): (props: ButtonProps) => React.ReactNode {
  const {
    block = false, // 宽度是否根据父组件决定
    disabled = false, // 是否可以点击
    icon = null, // icon 图标
    loading = false, // 加载
    shape = ShapeEnum.default, // 按钮形状
    type = ButtonTypeEnum.default, // 按钮类型
    onClick = staticFunction, // 点击事件
    children, // 子组件
  } = props;

  return <button>{children}</button>;
}

export default Button;
