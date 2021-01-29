import { createLocation, createPath } from "../utils/history.min.js";
import React, { useState, useEffect, useRef } from "react";
import RouterContext from "./RouterContext";
// 默认的forwardRef方法，传什么返回什么
const forwardRefShim = (C) => C;

let { forwardRef } = React;
if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}
// 处理function
export const resolveToLocation = (to, currentLocation) => {
  return typeof to === "function" ? to(currentLocation) : to;
};

function isModifiedEvent(event) {
  /**
   * event.metaKey 返回一个 布尔值，在鼠标事件发生时，用于指示 Meta 键是按下状态（true），还是释放状态（false）
   * event.altKey 当事件触发时，如果alt 被按下，则返回 true，否则返回false
   * event.ctrlKey 当事件触发时，如果ctrl 被按下，则返回 true，否则返回false
   * event.shiftKey 当事件触发时，如果shift 被按下，则返回 true，否则返回false
   */

  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const LinkButton = forwardRef((props, refs) => {
  const {
    innerRef, // TODO: deprecate
    navigate,
    onClick,
    ...othersProps
  } = props;

  const { target } = othersProps;
  let newProps = {
    ...othersProps,
    onClick(event) {
      // 如果有click方法，就执行默认的click方法
      try {
        if (onClick) {
          onClick(event);
        }
      } catch (e) {
        // 阻止默认事件
        event.preventDefault();
        throw e;
      }
      /**
       * event.defaultPrevented 判断是否调用了preventDefault 方法, 并且鼠标左键点击( event.button === 0 )
       * target 为 _self 并且没有按 alt ctrl shift meta键
       */
      if (
        !event.defaultPrevented &&
        event.button === 0 &&
        (!target || target === "_self") &&
        !isModifiedEvent(event)
      ) {
        event.preventDefault();
        navigate();
      }
      // 其他情况会走a标签默认的href的路由跳转
    },
  };
  if (forwardRefShim !== forwardRef) {
    newProps.ref = refs || innerRef;
  } else {
    newProps.ref = innerRef;
  }
  return <a {...newProps} />;
});
function LinkComponent(props, refs) {
  const {
    to, // 跳转链接 接收 string Object function 三种类型
    replace = false, // 是否replace方法
    innerRef, // ref，为了react15及以下
    component = LinkButton, // 组件
    ...othersProps
  } = props;
  return (
    <RouterContext.Consumer>
      {(context) => {
        const { history, location } = context;
        // 生成location
        const newLocation = createLocation({
          path: resolveToLocation(to, location),
          currentLocation: location,
        });
        // 生成href
        const href = newLocation ? createPath(newLocation) : "";

        let newProps = {
          ...othersProps,
          href,
          navigate() {
            const location = resolveToLocation(to, context.location);
            const method = replace ? history.replace : history.push;

            method(location);
          },
        };

        // React 15 compat
        if (forwardRefShim !== forwardRef) {
          newProps.ref = refs || innerRef;
        } else {
          newProps.innerRef = innerRef;
        }

        return React.createElement(component, newProps);
      }}
    </RouterContext.Consumer>
  );
}

const Link = forwardRef(LinkComponent);

export default Link;
