import React from "react";
import RouterContext from "./RouterContext";
import { matchPath } from "./match";

// 判断是否是空的子列表
function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

function Route(props) {
  const { path, component, children, render, computedMatch } = props;
  return (
    <RouterContext.Consumer>
      {(context) => {
        console.log("Route");
        const { history, location, match } = context;
        const nowLocation = props.location || location;
        // nowMatch 是根据 path 生成的正则表达是匹配的，computedMatch 是用在Switch中的，这个时候已经匹配过了，所以就不需要再走matchPath的逻辑了
        const nowMatch = computedMatch
          ? computedMatch
          : path
          ? matchPath(nowLocation.pathname, props)
          : match;
        const newProps = { ...context, nowLocation, nowMatch };

        if (Array.isArray(children) && isEmptyChildren(children)) {
          children = null;
        }
        /**
		 * 判断逻辑 
		 * 1、判断 nowMatch 是否存在
		 * 2、nowMatch 存在 则 判断 children 是否存在
		 * 		2.1、children 存在 判断 children 是否是 function
		 * 			2.1.1、是function 则 children(newProps)
		 * 			2.1.2、不是 function 则 children
		 *		2.2、children 不存在 判断 component 是否存在
					 2.2.1、component 存在 则 React.createElement(component, newProps)
					 2.2.2、component 不存在 则 判断 render 是否存在
						 2.2.2.1、 render 存在 则 render(newProps)
						 2.2.2.2、 render 不存在 则 null			 
		 * 3、nowMatch 不存在 判断 children 是否是 function
		 		3.1、是function 则 children(newProps)
				3.2、不是 function 则 children
		 */
        return (
          <RouterContext.Provider value={newProps}>
            {nowMatch
              ? children
                ? typeof children === "function"
                  ? children(newProps)
                  : children
                : component
                ? React.createElement(component, newProps)
                : render
                ? render(newProps)
                : null
              : typeof children === "function"
              ? children(newProps)
              : children}
          </RouterContext.Provider>
        );
      }}
    </RouterContext.Consumer>
  );
}

export default Route;
