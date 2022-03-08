import React, { useState, useEffect, useRef } from 'react';
import './index.less';
import classNames from 'classnames';
import { BaseProps, BaseObject } from '../../types/index';

export interface ImgItem extends BaseObject {
	/**
	 * @description 图片Url
	 * @default
	 * */
	url: string;
}

/**
 * 组件API
 */
export interface ElectronicReaderProps extends BaseProps {
	/**
	 * @description 展示的资源列表
	 * @default
	 * */
	imgList: ImgItem[];
	/**
	 * @description 当前页码
	 * @default 1
	 * */
	currentIndex?: number;
	onPageChange?: (pagination: number, imgItem: ImgItem) => void;
}
/**
 * 默认的最小页码
 */
const defaultMinPage = 1;

const ElectronicReader: React.FC<ElectronicReaderProps> = function (props) {
	const { currentIndex, prefixCls = 'moonBase', className = '', style } = props;
	const bodyClassName = classNames(`${prefixCls}-electronic-reader`, className);
	const canvasRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(defaultMinPage); // 页码

	useEffect(() => {
		setCurrentPage(currentIndex);
	}, [currentIndex]);

	return (
		<div className={bodyClassName} style={style}>
			<span>电子阅读器</span>
			<canvas ref={canvasRef}></canvas>
		</div>
	);
};

export default ElectronicReader;
