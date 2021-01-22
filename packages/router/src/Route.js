import React from "react";
import RouterContext from "./RouterContext";

function Route(props) {
  const { path, component, children } = props;
  return (
    <RouterContext.Consumer>
      {(context) => {
        console.log(context);
        console.log(path, component, children);
        return <div></div>;
      }}
    </RouterContext.Consumer>
  );
}

export default Route;
