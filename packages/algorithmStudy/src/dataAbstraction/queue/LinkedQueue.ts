import { Linked, LinkedNode } from "@/helpers/linked/index";

export class LinkedQueue<T> extends Linked<T> {
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

    /**
     * 出队
     */
    dequeue(): T {
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
