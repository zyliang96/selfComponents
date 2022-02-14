/**
 * 排序选项
 */
export interface SortBaseOptions<T> {
    compareFunc?: (p: T, q: T) => number;
}

/**
 * 排序的基本类
 */
export class SortBase<T> {
    protected _compareFunc: (p: T, q: T) => number = null;
    constructor(options?: SortBaseOptions<T>) {
        if (options && options.compareFunc) {
            this._compareFunc = options.compareFunc;
        }
    }
}
