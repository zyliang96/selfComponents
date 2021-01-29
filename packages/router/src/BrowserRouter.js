import React, { useEffect, useState, useRef } from "react";
import { createBrowserHistory as createHistory } from "../utils/history.min.js";
import Router from "./Router";

function BrowserRouter(props) {
  const { children } = props;
  const [history] = useState(() => {
    return createHistory();
  });
  return <Router history={history} children={children} />;
}

export default BrowserRouter;
