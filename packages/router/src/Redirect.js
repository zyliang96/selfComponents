import React from "react";
import RouterContext from "./RouterContext";
import { createLocation, locationsAreEqual } from "../utils/history.min.js";
import Lifecycle from "./Lifecycle";
import { matchPath } from "./match";

function Redirect(props) {
  const { computedMatch, to, push = false, from } = props;
  return (
    <RouterContext.Consumer>
      {(context) => {
        console.log("Redirect");
        const { history, staticContext, location } = context;
        // 如果是push，就用history.push 否则使用 history.replace
        const method = push ? history.push : history.replace;
        const nowLocation = props.location || location;
        // 根据from 匹配
        const nowMatch = from
          ? matchPath(nowLocation.pathname, {
              path: from,
              ...props,
            })
          : null;
        // 根据 跳转的地址生成location
        const newLocation = createLocation({
          path: to,
        });

        /**
         * 重定向方法
         */
        const redirectFunc = () => {
          // from 存在的时候，要根据from是否符合再做跳转
          if (from) {
            if (nowMatch) {
              method(newLocation);
            }
            return null;
          }
          method(newLocation);
        };

        if (staticContext) {
          redirectFunc();
          return null;
        }

        return (
          <Lifecycle
            onMount={() => {
              redirectFunc();
            }}
            onUpdate={(toPath) => {
              const prevLocation = createLocation({
                path: toPath,
              });
              if (
                !locationsAreEqual(prevLocation, {
                  ...newLocation,
                  key: prevLocation.key,
                })
              ) {
                redirectFunc();
              }
            }}
            to={to}
          />
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Redirect;
