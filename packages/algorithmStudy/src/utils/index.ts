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

/**
 * 交换
 * @param list
 * @param i
 * @param j
 */
export function exchange<T>(list: Array<T>, i: number, j: number): void {
    const temp: T = list[i];
    list[i] = list[j];
    list[j] = temp;
}

/**
 * 小于
 * @param p
 * @param q
 * @param compareFunc
 * @returns
 */
export function less<T extends number>(
    p: T,
    q: T,
    compareFunc?: (p: T, q: T) => number
) {
    if (compareFunc) {
        return compareFunc(p, q) < 0;
    }
    return p < q;
}
