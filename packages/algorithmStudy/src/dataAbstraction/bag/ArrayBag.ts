import { isFunction } from "@/utils/index";

export class ArrayBag<T> {
    private list: Array<T> = []; // 队列
    /**
     * 返回大小
     * @returns
     */
    size(): number {
        return this.list.length;
    }

    /**
     * 是否为空
     */
    isEmpty() {
        return this.list.length === 0;
    }

    /**
     * 新增
     * @param value
     */
    add(value: T): void {
        this.list.push(value);
    }

    /**
     * 默认的比较方法
     * @param target
     * @param item
     * @returns
     */
    private defaultCompare(target: T, item: T): boolean {
        return target === item;
    }

    /**
     * 是否存在
     * @param value
     * @param compare
     */
    isHas(value: T, compare: (target: T, item: T) => boolean): boolean {
        let compareFunc: (a: T, b: T) => boolean = this.defaultCompare;
        if (isFunction(compare)) {
            compareFunc = compare;
        }
        let result: boolean = false;
        try {
            this.list.forEach((filterItem) => {
                if (compareFunc(value, filterItem)) {
                    result = true;
                    throw "";
                }
            });
        } catch (e) {
            if (e) {
                console.error(e);
            }
        }
        return result;
    }

    /**
     * 遍历
     */
    [Symbol.iterator]() {
        return this.list[Symbol.iterator];
    }
}
