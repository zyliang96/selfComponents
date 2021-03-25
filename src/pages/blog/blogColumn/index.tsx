import React, { useEffect, useState, useRef } from "react";
import "./index.less";
import qs from "qs";
import history from "../../../history";
import menuConfig from "../menuConfig";
import { MenuItemObject, MenuTypeEnum } from "../type";
const columnTotal: number = menuConfig.columnList.length;
function BlogColumn(props) {
    const [id, setId] = useState(() => {
        const params = qs.parse(window.location.href.split("?")[1]);
        return params.id;
    });
    const [detail, setDetail] = useState<MenuItemObject>(null); // 详情
    const setTimeoutRef = useRef(null); // setTimeout 持久化对象
    const isGoBack = useRef(false); // 是否回退

    // 点击具体的文章
    const blogItemOnClick: (
        e: React.MouseEvent,
        data: MenuItemObject
    ) => void = (e, data) => {
        if (!data.key) {
            return;
        }
        if (data.type === MenuTypeEnum.article) {
            history.push(`/blog/detail?id=${data.key}`);
        }
        if (data.type === MenuTypeEnum.column) {
            history.push(`/blog/column?id=${data.key}`);
        }
    };

    useEffect(() => {
        if (id) {
            isGoBack.current = false;
            setTimeoutRef.current = null;
            if (Array.isArray(menuConfig.columnList)) {
                let result: MenuItemObject = null;
                for (let i = 0; i < columnTotal; i++) {
                    const item = menuConfig.columnList[i];
                    if (item.key === id) {
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
            <div className="blog-column-box">
                <div className="column-detail-info">
                    <div className="title">
                        <span>{detail.title}</span>
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
                <div className="column-article-box">
                    {Array.isArray(detail.children) &&
                        detail.children.map((item, index) => {
                            return (
                                <div
                                    className="article-item"
                                    key={`${item.key}${index}`}
                                    onClick={(e) => {
                                        blogItemOnClick(e, item);
                                    }}
                                >
                                    <div className="title">
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="time">
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="classify">
                                        {Array.isArray(item.classify) &&
                                            item.classify.map(
                                                (classifyItem) => {
                                                    return (
                                                        <span className="classify-item">
                                                            {classifyItem}
                                                        </span>
                                                    );
                                                }
                                            )}
                                    </div>
                                    <div className="description">
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        )
    );
}

export default BlogColumn;
