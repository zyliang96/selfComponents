/**
 * 链表节点
 */
export class LinkedNode<T> {
    item: T;
    next: LinkedNode<T> = null;
    constructor(value: T) {
        this.item = value;
    }
}

/**
 * 链表
 */
export class Linked<T> {
    protected first: LinkedNode<T>; // 首指针
    protected last: LinkedNode<T>; // 尾指针
    protected _size: number = 0; // 大小

    /**
     * 创建节点
     * @param value
     * @returns
     */
    createNode(value: T): LinkedNode<T> {
        return new LinkedNode<T>(value);
    }

    /**
     * 是否为空
     */
    isEmpty(): boolean {
        return this._size === 0;
    }
    /**
     * 大小
     */
    size(): number {
        return this._size;
    }

    /**
     * 返回最后一个
     * @returns
     */
    lastOne(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.last.item;
    }

    /**
     * 返回第一个
     */
    peek(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.first.item;
    }
}
