import React, { useEffect, useRef, useState, useContext } from "react";
import "./index.less";
import { ButtonProps, ShapeEnum, ButtonTypeEnum } from "./type";
import { SizeEnum } from "../../types";
import { staticFunction, getSize } from "../../utils/index";
import classnames from "classnames";
import { ConfigContext } from "../../utils/context";

type Loading = Number | Boolean;
/**
 * 获取形状
 * @param shape
 */
function getShape(shape: String | ShapeEnum): String {
  let shapeCls = "";
  switch (shape) {
    case ShapeEnum.circle:
      shapeCls = "circle";
      break;
    case ShapeEnum.round:
      shapeCls = "round";
      break;
    default:
      break;
  }
  return shapeCls;
}
/**
 * 获取类型
 * @param type
 */
function getType(type: String | ButtonTypeEnum): String {
  let typeCls = "";
  switch (type) {
    case ButtonTypeEnum.dashed:
      typeCls = "dashed";
      break;
    case ButtonTypeEnum.link:
      typeCls = "link";
      break;
    case ButtonTypeEnum.primary:
      typeCls = "primary";
      break;
    case ButtonTypeEnum.primaryBorder:
      typeCls = "primary-border";
      break;
    default:
      break;
  }
  return typeCls;
}

/**
 * button
 * button 的样式优先级 type -> shape -> size -> loading -> disabled
 * @param props
 */
function Button(props: ButtonProps): (props: ButtonProps) => React.ReactNode {
  const {
    prefixCls: customizePrefixCls, // 自定义前缀前缀
    block = false, // 宽度是否根据父组件决定
    disabled = false, // 是否可以点击
    icon = null, // icon 图标
    loading = false, // 加载
    shape: customizeShape = ShapeEnum.default, // 按钮形状
    type: customizeType = ButtonTypeEnum.default, // 按钮类型
    onClick = staticFunction, // 点击事件
    size: customizeSize = SizeEnum.default, // 大小
    children, // 子组件
    ...otherProps // 其他参数
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const [buttonLoading, setButtonLoading] = useState<Loading>(!!loading); // loading

  /**
   * button 点击
   */
  const buttonOnClick = (e) => {
    if (buttonLoading) {
      return;
    }
    onClick && onClick(e);
  };
  // 获取size
  const sizeCls = getSize(customizeSize);
  // 获取前缀
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  // 获取形状
  const shape = getShape(customizeShape);
  // 获取类型
  const type = getType(customizeType);

  const iconNode =
    icon && !buttonLoading ? (
      icon
    ) : (
      <LoadingIcon
        existIcon={!!icon}
        prefixCls={prefixCls}
        loading={!!innerLoading}
      />
    );

  const buttonClass = classnames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-disabled`]: disabled,
  });

  return (
    <button className="zyliang-button" onClick={buttonOnClick}>
      {children && <span>{children}</span>}
    </button>
  );
}

Button.displayName = "Button";
Button.__ZYLIANG_BUTTON = true;

export default Button;
