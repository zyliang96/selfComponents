import { isFunction } from "@/utils/index";
import { Linked, LinkedNode } from "@/helpers/linked/index";

export class LinkedStack<T> extends Linked<T> {
    /**
     * 入栈
     * @param value
     */
    push(value: T): void {
        const oldFirstNode = this.first;
        this.first = this.createNode(value);
        if (this.isEmpty()) {
            this.last = this.first;
        } else {
            this.first.next = oldFirstNode;
        }
        this._size++;
    }

    /**
     * 出栈
     */
    pop(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        const result = this.first.item;
        this.first = this.first.next;
        this._size--;
        if (this.isEmpty()) {
            this.last = null;
        }
        return result;
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
        let filterItem: LinkedNode<T> = this.first;
        while (filterItem) {
            if (compareFunc(value, filterItem.item)) {
                result = true;
                break;
            } else {
                filterItem = filterItem.next;
            }
        }
        return result;
    }

    /**
     * 遍历
     */
    [Symbol.iterator]() {
        let count: number = 0;
        let last: number = this._size;
        let nodeItem: LinkedNode<T> = null;
        return {
            next() {
                if (count < last) {
                    if (count !== 0 && nodeItem.next) {
                        nodeItem = nodeItem.next;
                    }
                    count++;
                    return {
                        done: false,
                        value: nodeItem
                    };
                } else {
                    return {
                        done: true
                    };
                }
            },
            return() {
                return {
                    done: true
                };
            }
        };
    }
}
