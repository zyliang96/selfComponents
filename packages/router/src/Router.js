import React from "react";
import RouterContext from "./RouterContext";

function Router(props) {
  const { children, history } = props;

  return <RouterContext.Provider value={{}}>{children}</RouterContext.Provider>;
}

export default Router;
