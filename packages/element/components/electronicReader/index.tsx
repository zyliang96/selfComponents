import React, { useState, useEffect, useRef } from 'react';
import './index.less';
import classNames from 'classnames';
import { BaseProps, BaseObject } from '../../types/index';
import * as pdfJs from 'pdfjs-dist';
import {
	createLoadingTask,
	initPdfjsWorker,
	getLockPage,
} from './helper/pdfjsUtils';
export interface ImgItem extends BaseObject {
	/**
	 * @description 图片Url
	 * @default
	 * */
	url: string;
}

export interface FileInfo {
	url: string;
	name?: string;
	[key: string]: any;
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
	pageIndex?: number;
	/**
	 * @description 文件链接
	 * @default  undefined
	 * */
	fileInfo: FileInfo;
	onPageChange?: (pagination: number, imgItem: ImgItem) => void;
}
/**
 * 默认的最小页码
 */
const defaultMinPage = 1;
const OptionKind = {
	VIEWER: 0x02,
	API: 0x04,
	WORKER: 0x08,
	PREFERENCE: 0x80,
};

const ElectronicReader: React.FC<ElectronicReaderProps> = function (props) {
	const {
		fileInfo,
		pageIndex,
		prefixCls = 'moonBase',
		className = '',
		style,
	} = props;
	const bodyClassName = classNames(`${prefixCls}-electronic-reader`, className);
	const headerClassName = classNames(`${prefixCls}-electronic-reader-header`);
	const footerClassName = classNames(`${prefixCls}-electronic-reader-footer`);
	const contentClassName = classNames(`${prefixCls}-electronic-reader-body`);
	const canvasClassName = classNames(`${prefixCls}-electronic-reader-canvas`);
	const renderDomClassName = classNames(`${prefixCls}-electronic-reader-dom`);
	const canvasRef = useRef(null);
	const renderDomRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(defaultMinPage); // 页码
	const [pageTotal, setPageTotal] = useState(0); // 页数
	const [loading, setLoading] = useState(false);
	const lastUrlRef = useRef(null);
	const loadingTaskRef = useRef(null);
	const [outLine, setOutLine] = useState([]); // 目录信息
	/**
	 * 获取目录信息
	 * @param {*} pdfDocument
	 */
	const getOutlineInfo = async (pdfDocument) => {
		const result = await getOutline(pdfDocument);
		getLockPage(pdfDocument, result, 15);
		setOutLine(result);
	};

	/**
	 * 加载pdf
	 * @param {*} url
	 */
	const loadingPdfFunc = async (url) => {
		const loadingTask = await createLoadingTask(url);
		loadingTaskRef.current = loadingTask;
		loadingTask.promise.then((pdfDocument) => {
			getOutlineInfo(pdfDocument);
		});
	};

	/**
	 * 分页改变
	 */
	const onPageIndexChange = (e) => {
		console.log('onPageIndexChange', e);
	};

	// 页面变化，则自动变化
	useEffect(() => {
		setCurrentPage(pageIndex);
	}, [pageIndex]);

	useEffect(() => {
		if (fileInfo && fileInfo.url && lastUrlRef.current.url !== fileInfo.url) {
			lastUrlRef.current = fileInfo;
			loadingPdfFunc(fileInfo.url);
		}
		return () => {
			if (loadingTaskRef.current) {
				loadingTaskRef.current.destroy();
				console.log('loadingTaskRef.current.destroy');
			}
		};
	}, [fileInfo]);

	return (
		<div className={bodyClassName} style={style}>
			<div className={headerClassName}>
				<div className="tool-bar-item zoom-out">
					<button>缩小</button>
				</div>
				<div className="tool-bar-item zoom-in">
					<button>放大</button>
				</div>
			</div>
			<div className={contentClassName}>
				<div className={canvasClassName}>
					<canvas ref={canvasRef}></canvas>
				</div>
				<div className={renderDomClassName} ref={renderDomRef}></div>
			</div>
			<div className={footerClassName}>
				<div className="tool-bar-item page-up">
					<button>上一页</button>
				</div>
				{pageTotal && (
					<div className="tool-bar-item pagination">
						<input value={currentPage} onBlur={onPageIndexChange} />
						<span>/</span>
						<span>{pageTotal}</span>
					</div>
				)}
				<div className="tool-bar-item page-down">
					<button>下一页</button>
				</div>
			</div>
		</div>
	);
};

export default ElectronicReader;
