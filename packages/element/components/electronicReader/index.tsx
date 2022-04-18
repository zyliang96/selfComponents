import React, { useState, useEffect, useRef } from 'react';
import './index.less';
import classNames from 'classnames';
import { BaseProps, BaseObject } from '../../types/index';
import * as pdfJs from 'pdfjs-dist';
import { createLoadingTask, initPdfjsWorker } from './helper/pdfjsUtils';
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
	const canvasClassName = classNames(`${prefixCls}-electronic-reader-canvas`);
	const canvasRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(defaultMinPage); // 页码

	const onFileChange = (e) => {
		const files = e.target.files;
		for (let i = 0, len = files.length; i < len; i++) {
			const file = new FileReader();
			file.readAsDataURL(files[i]);
			file.onload = (e) => {
				// console.log(e.target.result);
				// const loadingTask = createLoadingTask(e.target.result, {});
				// loadingTask.promise.then((pdfInfo) => {
				// 	console.log(pdfInfo);
				// });

				const loadingTask = pdfJs.getDocument(e.target.result);
				loadingTask.promise.then((pdfFile) => {
					console.log(window.devicePixelRatio);
					pdfFile.getPage(1).then((res) => {
						var viewport = res.getViewport({
							scale:
								// window.devicePixelRatio && window.devicePixelRatio > 1
								// 	? window.devicePixelRatio
								// 	: 1,
								2,
							// dontFlip: 300,
						});
						const canvas = canvasRef.current;
						const context = canvas.getContext('2d');
						const newCanvas = context.canvas;
						newCanvas.width = viewport.width;
						newCanvas.height = viewport.height;

						res.render({
							canvasContext: context,
							viewport,
						});
					});
				});
			};
		}
	};

	useEffect(() => {
		initPdfjsWorker();
	}, []);

	useEffect(() => {
		setCurrentPage(currentIndex);
	}, [currentIndex]);

	return (
		<div className={bodyClassName} style={style}>
			<div>
				<input type="file" onChange={onFileChange} name="上传文件" />
			</div>
			<span>电子阅读器</span>
			<div className={canvasClassName}>
				<canvas ref={canvasRef}></canvas>
			</div>
		</div>
	);
};

export default ElectronicReader;
