import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import "./index.less";
import menuConfig from "../menuConfig";
import { MenuItemObject, MenuTypeEnum, ArticleClassifyEnum } from "../type";
import classnames from "classnames";
import history from "../../../history";


function Component(props) {
    const [currentMenuPath, setCurrentMenuPath] = useState(""); // 当前菜单Path
    const currentComponentRef = useRef(null);

    
    return (
        <div className="">
            test
        </div>
    );
}

export default Component;
