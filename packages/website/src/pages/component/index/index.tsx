import React, { useEffect, useRef, useState } from "react";
import "./index.less";
import menuList from "./menuConfig";
import { MenuItemObject, MenuTypeEnum } from "./type";
import classnames from "classnames";
import history from "../../../history";

//处理菜单
let route = [];
let firstMenuItem: MenuItemObject | null = null;
const addRoute: (
    menu: MenuItemObject,
    parentMenu: null | MenuItemObject
) => void = (menu, parentMenu) => {
    let type: MenuTypeEnum | string = "";
    if (menu.name) {
        if (!parentMenu) {
            type = MenuTypeEnum.groupName;
        } else if (Array.isArray(menu.children) && menu.children.length > 0) {
            type = MenuTypeEnum.groupTypeName;
        } else {
            type = MenuTypeEnum.name;
        }
        const menuItemData = {
            type,
            name: menu.name,
            path: menu.path,
            component: menu.component,
        };
        if (
            type === MenuTypeEnum.name &&
            !firstMenuItem &&
            menu.component &&
            menu.path
        ) {
            firstMenuItem = menuItemData;
        }
        route.push(menuItemData);
    }
    if (Array.isArray(menu.children) && menu.children.length > 0) {
        menu.children.forEach((item) => {
            addRoute(item, menu);
        });
    }
};

Array.isArray(menuList) &&
    menuList.forEach((menu) => {
        addRoute(menu, null);
    });

function Component(props) {
    const [currentMenuPath, setCurrentMenuPath] = useState(""); // 当前菜单Path
    const currentComponentRef = useRef(null);
    // 具体菜单的样式
    const menuItemClassName: (menu: MenuItemObject) => Object = (item) => {
        const { type, path } = item;
        return classnames("menu-item", {
            [`menu-item-${type}`]: type,
            [`menu-item-click`]: path,
            [`menu-item-current`]: path === currentMenuPath,
        });
    };

    const selectMenu: (e: any, menu: MenuItemObject) => void = (e, menu) => {
        const { type, path } = menu;
        if (path && path !== currentMenuPath) {
            // 如果不是组件子类，则直接跳转到其他页面
            if (type !== MenuTypeEnum.name) {
                history.push(path);
                return;
            }
            if (menu.component) {
                currentComponentRef.current = React.createElement(
                    menu.component.default
                );
            } else {
                currentComponentRef.current = null;
            }

            setCurrentMenuPath(path);
        }
    };

    useEffect(() => {
        if (firstMenuItem) {
            selectMenu(null, firstMenuItem);
        }
    }, []);

    return (
        <div className="component-box">
            <div className="left-menu">
                <section className="container">
                    <ul className="menu-inline">
                        {Array.isArray(route) &&
                            route.map((item, index) => {
                                if (item.type !== MenuTypeEnum.name) {
                                    return (
                                        <div
                                            key={`${item.name}${index}`}
                                            className={menuItemClassName(item)}
                                            onClick={(e) => {
                                                selectMenu(e, item);
                                            }}
                                        >
                                            <span className="text">
                                                {item.name}
                                            </span>
                                        </div>
                                    );
                                }
                                return (
                                    <li
                                        className={menuItemClassName(item)}
                                        key={`${item.name}${index}`}
                                        onClick={(e) => {
                                            selectMenu(e, item);
                                        }}
                                    >
                                        <span className="text">
                                            {item.name}
                                        </span>
                                    </li>
                                );
                            })}
                    </ul>
                </section>
            </div>
            <div className="right-content">{currentComponentRef.current}</div>
        </div>
    );
}

export default Component;
