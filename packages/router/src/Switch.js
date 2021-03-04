import React from "react";
import RouterContext from "./RouterContext";
import { matchPath } from "./match";
function Switch(props) {
	return (
		<RouterContext.Consumer>
			{(context) => {
				const location = props.location || context.location;

				let element, match;

				React.Children.forEach(props.children, (child) => {
					// 循环的时候，如果match存在，就说明已经匹配到了，这个时候就不需要继续匹配了
					if (match == null && React.isValidElement(child)) {
						element = child;

						const path = child.props.path || child.props.from;

						match = path
							? matchPath(location.pathname, { ...child.props, path })
							: context.match;
					}
				});
				// 返回的只有一个符合要求的route，其他route不会造成影响
				return match
					? React.cloneElement(element, { location, computedMatch: match })
					: null;
			}}
		</RouterContext.Consumer>
	);
}

export default Switch;
