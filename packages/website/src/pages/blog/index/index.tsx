import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import "./index.less";
import menuConfig from "../menuConfig";
import {
	MenuItemObject,
	MenuTypeEnum,
	ArticleClassifyEnum,
	BlogTypeItem,
	ObjectData,
} from "../type";
import classnames from "classnames";
import history from "../../../history";

const map: ObjectData = {
	[MenuTypeEnum.article]: menuConfig.articleList,
	[MenuTypeEnum.column]: menuConfig.columnList,
};

const defaultPageInfo: ObjectData = {
	pageIndex: 1,
	pageSize: 10,
};

const articleTotal: number = menuConfig.articleList.length; // 文章total
const columnTotal: number = menuConfig.columnList.length; // 栏目列表

function getTypeName(type: MenuTypeEnum | string): string {
	let result: string = "";
	if (Array.isArray(menuConfig.menuList)) {
		menuConfig.menuList.forEach((item) => {
			if (item.type === type) {
				result = item.name;
			}
		});
	}
	return result;
}

function Component(props) {
	const [blogList, setBlogList] = useState<Array<MenuItemObject>>([]); // 列表
	const [pageInfo, setPageInfo] = useState(defaultPageInfo);
	const [currentBlogType, setCurrentBlogType] = useState<MenuTypeEnum | string>(
		""
	);

	const blogTypeItemClassName = (type) => {
		return classnames("blog-type-item", {
			"blog-type-item-current": type === currentBlogType,
		});
	};

	// 类型改变
	const blogTypeOnChange: (e: React.MouseEvent, data: BlogTypeItem) => void = (
		e,
		data
	) => {
		if (data.type !== currentBlogType) {
			const resultList: Array<MenuItemObject> = [].concat(map[data.type] || []);
			setCurrentBlogType(data.type);
			setBlogList(resultList);
		}
	};

	// 点击具体的文章
	const blogItemOnClick: (e: React.MouseEvent, data: MenuItemObject) => void = (
		e,
		data
	) => {
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
		setCurrentBlogType(menuConfig.menuList[0].type);
		setBlogList(menuConfig.articleList);
	}, []);

	return (
		<div className="blog-home-box">
			<div className="left-content">
				<div className="blog-type-box">
					{Array.isArray(menuConfig.menuList) &&
						menuConfig.menuList.map((item) => {
							return (
								<div
									className={blogTypeItemClassName(item.type)}
									key={item.type}
									onClick={(e) => {
										blogTypeOnChange(e, item);
									}}
								>
									<span>{item.name}</span>
								</div>
							);
						})}
				</div>
				<div className="blog-list-box">
					{Array.isArray(blogList) &&
						blogList.map((item, index) => {
							return (
								<div
									className="blog-item"
									key={`${item.key}${index}`}
									onClick={(e) => {
										blogItemOnClick(e, item);
									}}
								>
									<div className="title">
										<span>{item.title}</span>
									</div>

									<div className="classify">
										{Array.isArray(item.classify) &&
											item.classify.map((classifyItem) => {
												return (
													<span className="classify-item">{classifyItem}</span>
												);
											})}
									</div>
									<div className="description">
										<span>{item.description}</span>
									</div>
									<div className="other">
										<div className="time">
											<span>{item.time}</span>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="right-content">
				<div className="classify-box">
					<div className="title">
						<span>拥有分类</span>
					</div>
					<div className="list">
						{Array.isArray(menuConfig.classifyList) &&
							menuConfig.classifyList.map((item, index) => {
								return (
									<div className="list-item" key={item}>
										<span className="text">{item}</span>
										<span className="total">
											{menuConfig.classifyTotalList[index]}
										</span>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;
