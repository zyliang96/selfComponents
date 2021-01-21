export const BeforeUnloadEventType = "beforeunload";
export const HashChangeEventType = "hashchange";
export const PopStateEventType = "popstate";

/**
 * 历史栈上一次操作的类型
 */
export const actionType = {
	push: "PUSH", // 推入栈
	replace: "REPLACE", // 替换栈
	pop: "POP", // 初始值
};
