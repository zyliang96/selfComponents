import { isFunction } from "@/utils/index";
/**
 * 数组栈
 */
export class ArrayStack<T> {
    private list: Array<T> = []; // 列表

    /**
     * 大小
     */
    size(): number {
        return this.list.length;
    }

    /**
     * 是否是空
     */
    isEmpty(): boolean {
        return this.list.length === 0;
    }

    /**
     * 入栈
     * @param value
     */
    push(value: T): void {
        this.list.push(value);
    }

    /**
     * 出栈
     */
    pop(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.list.pop();
    }

    /**
     * 栈底元素
     * @returns
     */
    peek(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.list[this.size()];
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
}
