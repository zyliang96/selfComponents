import React from "react";
import history from "../history";
// import { Router, Route, Redirect, Switch, Link } from "../../src/index";
import { Router, Route, Redirect, Switch, Link } from "react-router-dom";

export default function DefaultPage(props) {
	const gotoHome = () => {
		history.push("/home");
	};
	const gotoPageOne = () => {
		history.push("/pageOne");
	};
	const gotoPageOneIndex = () => {
		history.push("/pageOne/index");
	};
	return (
		<div>
			<div>DefaultPage</div>
			<div>
				<div>测试页面</div>
				<div onClick={gotoHome}>home</div>
				<div onClick={gotoPageOne}>pageOne</div>
				<div onClick={gotoPageOneIndex}>pageOne/index</div>
				<Link to="/home">goHome</Link>
				<Link to="/pageOne">goPageOne</Link>
			</div>
		</div>
	);
}
