import React from "react";
import ReactDom from "react-dom";
import { createHashHistory } from "../../history/dist/history.main.js";
import { Router, Route } from "../src/index";
import Home from "./pages/home";
import PageOne from "./pages/pageOne";

const history = createHashHistory();
function App(props) {
	const gotoHome = () => {
		history.push('/home/pageOne')
	}
	const gotoPageOne = () => {
		history.push('/home/pageOne')
	}

	return (
		<Router history={history}>
			<div>
				<div>测试页面</div>
				<div onClick={gotoHome}>home</div>
				<div onClick={gotoPageOne}>pageOne</div>
			</div>
			<Route path="/home/:test" component={Home} />
			<Route path="/:test/pageOne" component={PageOne} />
		</Router>
	);
}

ReactDom.render(<App />, document.getElementById("root"));
