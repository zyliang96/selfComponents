import React, { lazy } from "react";
import ReactDom from "react-dom";
import { Router, Route, Redirect } from "../src/index";
// import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
import PageOne from "./pages/pageOne";
import DefaultPage from "./pages/defaultPage";
import history from "./history";

function App(props) {
  return (
    <Router history={history}>
      <Redirect exact to="/" />
      <Route exact path="/" component={DefaultPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/pageOne" component={PageOne} />
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
