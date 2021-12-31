export interface BinarySearchOptions {
    equal?: <T>(first: T, second: T) => boolean; // 等于
    less?: <T>(first: T, second: T) => boolean; // 小于
    more?: <T>(first: T, second: T) => boolean; // 大于
}
// 默认小于函数函数
function defaultLess<T>(first: T, second: T): boolean {
    return first < second;
}
function defaultMore<T>(first: T, second: T): boolean {
    return first > second;
}
function defaultEqual<T>(first: T, second: T): boolean {
    return first === second;
}
/**
 * 二分查找
 */
class BinarySearch {
    less: <T>(first: T, second: T) => any;
    more: <T>(first: T, second: T) => any;
    equal: <T>(first: T, second: T) => any;
    constructor(options: BinarySearchOptions = {}) {
        const { less, more, equal } = options;
        this.less = less || defaultLess;
        this.more = more || defaultMore;
        this.equal = equal || defaultEqual;
    }

    /**
     * 查看是否在数组中
     * @param list
     * @param key
     */
    private indexOf<T>(list: Array<T>, key: T): number {
        let left = 0;
        let right = list.length;
        while (left <= right) {
            // 中间数取值逻辑为在左指数的基础上加上差值的二分之一
            let mid = left + Math.floor((right - left) / 2);
            /**
             * 小于的时候，右指数等于中位数减一
             * 大于的时候，左指数等于中位数加一
             * 等于的时候，返回中位数
             */
            if (this.less<T>(key, list[mid])) {
                right = mid - 1;
            } else if (this.more<T>(key, list[mid])) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }

    /**
     * 比较
     * @param list
     * @param key
     * @returns
     */
    rank<T>(list: Array<T>, key: T): number {
        return this.indexOf<T>(list, key);
    }
}

export function binarySearchFunc<T extends number>(
    list: Array<T>,
    key: T,
    options?: BinarySearchOptions
):number {
    const binarySearchInterface = new BinarySearch(options);
    return binarySearchInterface.rank(list, key);
}
