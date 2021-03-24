/**
 * TODO 需要了解一下react的源码
 */
import React from "react";
import hoistStatics from "hoist-non-react-statics";

import RouterContext from "./RouterContext.js";

/**
 * A public higher-order component to access the imperative API
 */
function withRouter(Component) {
	const displayName = `withRouter(${Component.displayName || Component.name})`;
	console.log(displayName)
	const C = (props) => {
		const { wrappedComponentRef, ...remainingProps } = props;

		return (
			<RouterContext.Consumer>
				{(context) => {
					return (
						<Component
							{...remainingProps}
							{...context}
							ref={wrappedComponentRef}
						/>
					);
				}}
			</RouterContext.Consumer>
		);
	};

	C.displayName = displayName;
	C.WrappedComponent = Component;
	return hoistStatics(C, Component);
}

export default withRouter;
