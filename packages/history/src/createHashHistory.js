import { createEventList } from "../utils/index";
import {
	BeforeUnloadEventType,
	HashChangeEventType,
	PopStateEventType,
	actionType,
} from "./config/index";
/**
 * 创建history路由
 * @param {*} options
 */
function createHashHistory(options) {
	const { window = document.defaultView, isShowBeforeUnload = false } = options;

	// 全局history
	const globalHistory = window.history;

	// 订阅者队列
	const listeners = createEventList();
	// 提示事件队列
	const blockers = createEventList();
	// 初始历史栈
	const allPaths = ["/"];

	/**
	 * 添加路由
	 */
	function push(path, state) {}

	/**
	 * 跳转
	 * @param {Number} index
	 */
	function go(index) {
		history.go(index);
	}

	/**
	 * 回退
	 */
	function back() {
		go(-1);
	}

	/**
	 * 前进
	 */
	function forward() {
		go(1);
	}

	/**
	 * 注册订阅者
	 * @param {Function} fn
	 */
	function listen(listener) {
		return listeners.push(listener);
	}

	/**
	 * 页面刷新前的处理操作
	 * 只有history.back() 和 history.forward()会触发F
	 */
	function promptBeforeUnload(event) {
		if (!isShowBeforeUnload) {
			return;
		}
		// Cancel the event as stated by the standard.
		event.preventDefault();
		// Chrome requires returnValue to be set.
		event.returnValue = "";
	}

	/**
	 * 提示
	 */
	function block(blocker) {
		let unblock = blockers.push(blocker);
		if (blockers.length === 1) {
			window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
		}

		return () => {
			unblock();
			if (!blockers.length) {
				window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
			}
		};
	}

	let history = {
		get action() {
			return action;
		},
		get location() {
			return location;
		},
		createHref,
		push,
		replace,
		go,
		back,
		forward,
		listen,
		block,
	};

	return history;
}
