import React from "react";
import ReactDom from "react-dom";
import { createHashHistory } from "../../history/dist/history.main.js";
import { Router, Route } from "../src/index";
import Home from "./pages/home";
import PageOne from "./pages/pageOne";

const history = createHashHistory();
function App(props) {
  return (
    <Router history={history}>
      <Route path="/home" component={Home} />
      <Route path="/pageOne" component={PageOne} />
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
