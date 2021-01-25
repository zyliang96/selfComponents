/**
 * 判断是否符合路由条件
 * @param {*} path
 * @param {*} target
 */
export function matchPath(locationPath, targetPath) {
	const reg = /^\/((:?)\S+)/;
	const locationPathMatch = locationPath.match(reg);
	const targetPathMatch = targetPath.match(reg);
	console.log(locationPathMatch);
	console.log(targetPathMatch);

	return locationPathMatch[1] === targetPathMatch[1];
}
