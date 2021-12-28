import { isFunction } from "@/utils/index";

/**
 * 背包节点
 */
export class Node<T> {
    item: T;
    next: Node<T> | null;
    constructor(value: any) {
        this.item = value;
    }
}
/**
 * 背包
 */
export class Bag<T> {
    private _size: number = 0; // 大小
    private list: Node<T>;

    /**
     * 创建节点
     */
    private createNode(value: T): Node<T> {
        return new Node<T>(value);
    }

    /**
     * 返回大小
     * @returns
     */
    size(): number {
        return this._size;
    }

    /**
     * 是否为空
     */
    isEmpty() {
        return this._size === 0;
    }

    /**
     * 新增
     * @param value
     */
    add(value: T): void {
        const oldNode: Node<T> = this.list;
        const newNode = this.createNode(value);
        newNode.next = oldNode;
        this._size++;
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
        let filterItem: Node<T> = this.list;
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
        let nodeItem: Node<T> = null;
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
