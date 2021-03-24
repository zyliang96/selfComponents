import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom";
import {
    // Router,
    // Route,
    // Redirect,
    // Switch,
    // Link,
    WithRouter,
} from "../src/index";
import { Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./pages/home";
import PageOne from "./pages/pageOne";
import DefaultPage from "./pages/defaultPage";
import history from "./history";
function App(props) {
    return (
        <Suspense fallback={<></>}>
            <Router history={history}>
                {/* <Redirect exact to="/" /> */}
                <Switch>
                    <Route exact path="/" component={DefaultPage} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/pageOne" component={PageOne} />
                    <Route
                        exact
                        path="/pageOne/index"
                        component={() => {
                            const Comp = lazy(() => import(`./pages/pageOne`));
                            const Result = withRouter(Comp);
                            return <Result />;
                        }}
                    />
                </Switch>
            </Router>
        </Suspense>
    );
}

ReactDom.render(<App />, document.getElementById("root"));
