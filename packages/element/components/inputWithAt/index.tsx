import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import classNames from 'classnames';
const list = [
	{
		id: '1',
		name: '张三',
	},
	{
		id: '2',
		name: '李四',
	},
];

/**
 *
 */
function AtList(props) {
	const { list = [], onClick, className, style } = props;
	const bodyClassName = classNames('at-list-box', {
		[className]: className,
	});

	/**
	 * 对象点击
	 */
	const itemOnClick = (item, e) => {
		onClick && onClick(item, e);
	};
	return (
		Array.isArray(list) &&
		list.length > 0 && (
			<div className={bodyClassName} style={style}>
				{list.map((item) => {
					return (
						<div
							className="at-list-item"
							key={item.id}
							onClick={(e) => {
								itemOnClick(item, e);
							}}
						>
							{item.name}
						</div>
					);
				})}
			</div>
		)
	);
}

const defaultPosInfo = {
	left: 0,
	top: 0,
};
function InputWithAt(props) {
	const { className, style } = props;
	const [isShowList, setIsShowList] = useState(false);
	const positionRef = useRef(null);
	const atInputRef = useRef(null);
	const [posInfo, setPosInfo] = useState(defaultPosInfo);
	const bodyClassName = classNames('at-input-box', {
		[className]: className,
	});

	/**
	 * 监听键盘按键
	 * @param e
	 */
	const onKeyDownInput = (e) => {
		// console.log(e.keyCode, e.key, e.code, e.shiftKey);

		// 英文code是 50， 判断是否按住shift + @键
		// 中文输入法下标点符号keyCode都是一样的：229，推荐使用event.code或event.key作为@的判断。

		if ((e.keyCode === 229 || e.keyCode === 50) && e.shiftKey) {
			setRecordCoordinates();
			createSelectElement(positionRef.current);
		}
	};

	/**
	 * 获取光标
	 */
	const setRecordCoordinates = () => {
		try {
			console.log(atInputRef.current.value);
			// getSelection() 返回一个 Selection 对象，表示用户选择的文本范围或光标的当前位置。
			const selection = getSelection();
			const range = selection.getRangeAt(0);
			let result = {
				selection,
				range,
			};
			// 缓存光标所在节点
			result['focusNode'] = selection.focusNode;
			// 缓存光标所在节点位置
			result['focusOffset'] = selection.focusOffset;
			// 光标所在位置
			result['pos'] = range.getBoundingClientRect();
			positionRef.current = result;
		} catch (error) {
			console.log(error, '光标获取失败了～');
		}
	};

	const atListOnClick = (item) => {
		setIsShowList(false);
	};

	/**
	 * 创建列表元素
	 * @param position
	 */
	const createSelectElement = (position) => {
		const { selection, range, pos, focusOffset } = position;
		// console.log(focusOffset);
		let result = {
			left: pos.x + 14, // 这里加了一个字体的大小，用于控制偏移量
			top: pos.y + pos.height,
		};
		setPosInfo(result);
		setIsShowList(true);
	};
	return (
		<div className={bodyClassName} style={style}>
			<div
				ref={atInputRef}
				contentEditable={true}
				onKeyDown={onKeyDownInput}
				className="at-input-textarea"
			/>
			{isShowList && (
				<AtList
					list={list}
					style={{ top: posInfo.top, left: posInfo.left }}
					className="at-input-list"
					onClick={atListOnClick}
				/>
			)}
		</div>
	);
}

export default InputWithAt;
