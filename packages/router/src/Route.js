import React from "react";
import RouterContext from "./RouterContext";
import { matchPath } from "./match";

// 判断是否是空的子列表
function isEmptyChildren(children) {
	return React.Children.count(children) === 0;
}

function Route(props) {
	const { path, component, children, render } = props;
	return (
		<RouterContext.Consumer>
			{(context) => {
				const { history, location, match } = context;
				console.log("context", context);
				console.log("props", path, children);

				const nowLocation = props.location || location;
				const props = { ...context, nowLocation, match };
				const isThisPath = matchPath(nowLocation.pathname, path);
				return (
					<RouterContext.Provider value={props}>
						{isThisPath ? React.createElement(component, props) : null}
					</RouterContext.Provider>
				);
			}}
		</RouterContext.Consumer>
	);
}

export default Route;
