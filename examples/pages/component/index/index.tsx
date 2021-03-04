import React, { useEffect, useRef, useState } from "react";
import "./index.less";
import menuList from "./config.json";

enum MenuEnum {
	"name" = "name",
	"groupName" = "groupName",
	"typeName" = "typeName",
}
let route = [];

function load(path) {}

function addRoute(page, type) {
	const component = load(page.path);
	const child = {
		path: page.path.slice(1),
		meta: {
			title: page.title || page.name,
			description: page.description,
		},
		name: "component" + (page.title || page.name),
		component: component,
	};
	route.push(child);
}

Array.isArray(menuList) &&
	menuList.map((menu) => {
		if (menu.href) return;
		if (menu.groups) {
			menu.groups.forEach((group) => {
				group.list.forEach((nav) => {
					addRoute(nav,);
				});
			});
		} else if (menu.children) {
			menu.children.forEach((nav) => {
				addRoute(nav);
			});
		} else {
			addRoute(menu);
		}
	});

function Component(props) {
	return (
		<div className="component-box">
			<div className="left-menu">
				{menuList.map((item) => {
					return <div className="menu-item" key={item}></div>;
				})}
			</div>
		</div>
	);
}

export default Component;
