export class LinkedNode<T> {
    item: T;
    next: LinkedNode<T>;
}

export class LinkedQueue<T> {
    private first: LinkedNode<T>; // 首指针
    private last: LinkedNode<T>; // 尾指针
    private _size: number = 0; // 大小

    /**
     * 是否为空
     */
    isEmpty(): boolean {
        return this._size === 0;
    }
}
