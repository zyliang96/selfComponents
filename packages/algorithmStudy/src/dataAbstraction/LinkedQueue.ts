export class LinkedNode<T> {
    item: T;
    next: LinkedNode<T> = null;
    constructor(value: T) {
        this.item = value;
    }
}

export class LinkedQueue<T> {
    private first: LinkedNode<T>; // 首指针
    private last: LinkedNode<T>; // 尾指针
    private _size: number = 0; // 大小

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
     * 返回队首元素
     */
    peek(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.first.item;
    }

    /**
     * 入队
     * @param value
     */
    enqueue(value: T): void {
        const oldLastNode = this.last;
        this.last = this.createNode(value);
        if (this.isEmpty()) {
            this.first = this.last;
        } else {
            oldLastNode.next = this.last;
        }
        this._size++;
    }
}
