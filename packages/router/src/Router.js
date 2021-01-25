import React, { useState, useEffect, useRef } from "react";
import RouterContext from "./RouterContext";
import HistoryContext from "./HistoryContext";
import { Chunk } from "webpack";
function computeRootMatch(pathname) {
	return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
}
function Router(props) {
	const { children, history } = props;
	const [location, setLocation] = useState(history.location); // location

	useEffect(() => {
		setLocation(history.location);
		let unListen = history.listen(({ action, location }) => {
			setLocation(location);
		});
		return () => {
			unListen();
		};
	}, [history]);

	return (
		<RouterContext.Provider
			value={{
				history,
				location,
				match: computeRootMatch(location.pathname),
			}}
		>
			<HistoryContext.Provider children={children} value={history} />
		</RouterContext.Provider>
	);
}

export default Router;
