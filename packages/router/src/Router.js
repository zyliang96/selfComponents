import React, { useState, useEffect, useRef } from "react";
import RouterContext from "./RouterContext";
import HistoryContext from "./HistoryContext";
function computeRootMatch(pathname) {
  return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
}
function Router(props) {
  const {
    children,
    history,
    staticContext = false, // 是否是服务端渲染的标志
  } = props;
  const [location, setLocation] = useState(history.location); // location

  useEffect(() => {
    setLocation(history.location);
    let unListen = null;
    // 不是服务端渲染的情况下才
    if (!staticContext) {
      unListen = history.listen(({ action, location }) => {
        setLocation(location);
      });
    }

    return () => {
      if (unListen) {
        unListen();
      }
    };
  }, [history]);

  return (
    <RouterContext.Provider
      value={{
        history,
        location,
        match: computeRootMatch(location.pathname),
        staticContext,
      }}
    >
      <HistoryContext.Provider children={children} value={history} />
    </RouterContext.Provider>
  );
}

export default Router;
