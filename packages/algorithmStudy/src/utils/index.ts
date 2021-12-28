/**
 * 检查是否是数字
 * @param value
 * @returns
 */
export function isNumber(value: any): boolean {
    if (value && value.trim()) {
        const reg: RegExp = /^\d*$/;
        if (reg.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

/**
 * 判断是否存在值
 * @param value
 * @returns
 */
export function isExist(value: any): boolean {
    if (value || value === 0) {
        return true;
    }
    return false;
}

/**
 * 判断是否是数组
 * @param list
 */
export function validateIsArray(list: any): void {
    if (!Array.isArray(list)) {
        throw new TypeError(`expect a Array but get a ${typeof list}`);
    }
}

/**
 * 是否是function
 * @param fn
 * @returns
 */
export function isFunction(fn: any): boolean {
    return typeof fn === "function";
}
