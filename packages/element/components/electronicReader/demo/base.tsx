import { ElectronicReader } from '@moon-base/element';
import React, { useEffect, useState } from 'react';
import * as pdfJs from 'pdfjs-dist';
import { createLoadingTask, initPdfjsWorker } from '../helper/pdfjsUtils';
export default (props) => {
	const [imgList, setImgList] = useState([]);
	const [fileInfo, setFileInfo] = useState(null);
	const onFileChange = (e) => {
    const files = e.target.files
		const file = e.target.files[0];

		let fileUrl = URL.createObjectURL(file);
		let info = {
			url: fileUrl,
		};
		if (file.name) {
			info['name'] = file.name;
		}
		// setFileInfo(info);
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
					console.log('getDocument', pdfFile);
					console.log(window.devicePixelRatio);
					pdfFile.getOutline().then((outline) => {
						console.log('outline', outline);

						// const targetOutLine = outline[13];
						// pdfFile.getPageIndex(targetOutLine.dest[0]).then((pageNumber) => {
						// 	console.log('getDestination', pageNumber);
						// 	pdfFile.getPage(9).then((pdfPage) => {
						// 		var viewport = pdfPage.getViewport({
						// 			scale:
						// 				// window.devicePixelRatio && window.devicePixelRatio > 1
						// 				// 	? window.devicePixelRatio
						// 				// 	: 1,
						// 				1.5 * pdfJs.PixelsPerInch.PDF_TO_CSS_UNITS,
						// 			// dontFlip: 300,
						// 		});
						// 		// canvasBodyRef.current.style.width = viewport.width + 'px';
						// 		// canvasBodyRef.current.style.height = viewport.height + 'px';
						// 		pdfPage.getTextContent().then((textContent) => {
						// 			const readableStream = pdfPage.streamTextContent({
						// 				disableCombineTextItems: false,
						// 				includeMarkedContent: true,
						// 			});
						// 			const div = document.createElement('span');
						// 			div.style.width = viewport.width + 'px';
						// 			div.style.height = viewport.height + 'px';
						// 			// div.style.width = 800 + 'px';
						// 			// div.style.height = 900 + 'px';

						// 			// viewport.width = 800;
						// 			// viewport.height = 900;
						// 			const renderTask = pdfJs.renderTextLayer({
						// 				textContent,
						// 				textContentStream: readableStream,
						// 				container: div,
						// 				viewport,
						// 				enhanceTextSelection: false,
						// 			});
						// 			console.log('renderTask._textDivs', renderTask._textDivs);
						// 			console.log('renderTask._textDivs:div', div);
						// 			renderTask.promise.then(() => {
						// 				// console.log(domRef.current);
						// 				domRef.current.style.width = viewport.width + 'px';
						// 				domRef.current.style.height = viewport.height + 'px';
						// 				domRef.current.appendChild(div);
						// 			});
						// 			console.log(textContent);
						// 		});

						// 		const canvas = canvasRef.current;
						// 		const context = canvas.getContext('2d');
						// 		const newCanvas = context.canvas;
						// 		newCanvas.width = viewport.width;
						// 		newCanvas.height = viewport.height;
						// 		pdfPage.render({
						// 			canvasContext: context,
						// 			viewport,
						// 		});
						// 	});

							// pdfViewer.scrollPageIntoView({
							// 	pageNumber,
							// 	destArray: targetOutLine.dest,
							// 	ignoreDestinationZoom: false,
							// });
						// });
						// this.pdfDocument.getDestination(dest)
					});
					// pdfFile.getPage(1).then((res) => {
					// 	var viewport = res.getViewport({
					// 		scale:
					// 			// window.devicePixelRatio && window.devicePixelRatio > 1
					// 			// 	? window.devicePixelRatio
					// 			// 	: 1,
					// 			2,
					// 		// dontFlip: 300,
					// 	});
					// 	const canvas = canvasRef.current;
					// 	const context = canvas.getContext('2d');
					// 	const newCanvas = context.canvas;
					// 	newCanvas.width = viewport.width;
					// 	newCanvas.height = viewport.height;
					// 	res.render({
					// 		canvasContext: context,
					// 		viewport,
					// 	});
					// });
				});
			};
		}
	};

	return (
		<div style={{ overflowY: 'auto' }}>
			<div>
				<input type="file" onChange={onFileChange} name="上传文件" />
			</div>
			<span>电子阅读器</span>

			{/* <ElectronicReader fileInfo={fileInfo} imgList={imgList} /> */}
		</div>
	);
};
