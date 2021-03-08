/**
 * 选择器
 * @param {Object} element dom元素或者selector
 * @return {HTMLElement} 返回选择的Dom对象，无果没有符合要求的，则返回null
 */
export function selector(element) {
    let target = element;

    if (typeof target === "string") {
        target = document.querySelector(target);
    }

    return target;
}
