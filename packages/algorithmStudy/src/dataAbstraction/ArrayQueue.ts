/**
 * 数组队列
 */
export class ArrayQueue<T> {
    private list: Array<T> = []; // 队列

    /**
     * 是否为空
     */
    isEmpty(): boolean {
        return this.list.length === 0;
    }

    /**
     * 返回队列大小
     * @returns
     */
    size(): number {
        return this.list.length;
    }

    /**
     * 返回队首元素
     */
    peek(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.list[0];
    }

    /**
     * 入队
     * @param value
     */
    enqueue(value: T): void {
        this.list.push(value);
    }

    /**
     * 出队
     */
    dequeue(): T {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        return this.list.shift();
    }

    /**
     * 遍历
     * @returns
     */
    [Symbol.iterator]() {
        return this.list[Symbol.iterator];
    }
}
