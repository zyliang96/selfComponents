/**
 * 创建事件队列
 */
export function createEventList() {
	let list = [];

	return {
		get length() {
			return list.length;
		},
		push(fn) {
			list.push(fn);
			return () => {
				list = list.filter((item) => item !== fn);
			};
		},
		call(arg) {
			list.forEach((fn) => {
				fn && fn(arg);
			});
		},
	};
}
