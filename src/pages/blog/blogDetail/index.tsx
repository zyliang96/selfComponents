import React, { useEffect, useState, useRef } from "react";
import "./index.less";
import qs from "qs";
import history from "../../../history";
import menuConfig from "../menuConfig";
import markdownCreator from "../../../lib/markdownScoureParser";
import { MenuItemObject } from "../type";
const articleTotal: number = menuConfig.articleList.length;
function BlogDetail(props) {
    const [id, setId] = useState(() => {
        const params = qs.parse(window.location.href.split("?")[1]);
        return params.id;
    });
    const [detail, setDetail] = useState<MenuItemObject>(null); // 详情
    const currentComponentRef = useRef(null);
    const setTimeoutRef = useRef(null); // setTimeout 持久化对象
    const isGoBack = useRef(false); // 是否回退

    useEffect(() => {
        if (id) {
            isGoBack.current = false;
            setTimeoutRef.current = null;
            if (Array.isArray(menuConfig.articleList)) {
                let result: MenuItemObject = null;
                for (let i = 0; i < articleTotal; i++) {
                    const item = menuConfig.articleList[i];
                    if (item.key === id) {
                        currentComponentRef.current = React.createElement(
                            markdownCreator(item.detail.default)
                        );
                        result = item;
                    }
                }
                setDetail(result);
            }
        } else {
            if (setTimeoutRef.current) {
                return;
            }
            isGoBack.current = true;
            setTimeoutRef.current = setTimeout(() => {
                if (isGoBack.current) {
                    history.back();
                }
            }, 800);
        }
    }, [id]);
    return (
        detail && (
            <div className="blog-detail-box">
                <div className="baseInfo">
                    <div className="title">
                        <span>{detail.title}</span>
                    </div>
                    <div className="time">
                        <span>{detail.time}</span>
                    </div>
                    <div className="classify">
                        {Array.isArray(detail.classify) &&
                            detail.classify.map((item) => {
                                return (
                                    <span className="classify-item" key={item}>
                                        {item}
                                    </span>
                                );
                            })}
                    </div>
                    <div className="description">
                        <span>{detail.description}</span>
                    </div>
                </div>
                <div className="content">{currentComponentRef.current}</div>
            </div>
        )
    );
}

export default BlogDetail;
