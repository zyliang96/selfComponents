import React from "react";
import RouterContext from "./RouterContext";

function Route(props) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        console.log(context);
        return <div></div>;
      }}
    </RouterContext.Consumer>
  );
}

export default Route;
