// import { exchange, less, greater } from "@/utils/index";
import { exchange, less, greater } from "../../utils/index";
/**
 * 数组堆
 */
export enum HeapType {
    MAX = 'maxHeap', // 最大堆
    MIN = 'minHeap', // 最小堆
}

export interface BaseObject {
    [key: string]: any
}

export interface ArrayBinaryHeapProps<T> {
    type: HeapType;
    compareFunc?: (p: T, q: T) => number;
}
/**
 * TODO 由于这里的堆都是二叉树，所以存在一下特性
 * 1、当前节点为k，则其子节点为 2k或者2k+1
 * 2、子节点为k，则其父节点为k >> 1
 */
export class ArrayBinaryHeap<T extends number>{
    private list: Array<T> = []; // 队列
    private count: number = 0; // 计数
    type: HeapType; // 堆类型
    protected _compareFunc: (p: T, q: T) => number = null; // 比较方法

    private swimMap: BaseObject; // 上浮map
    private sinkMap: BaseObject; // 下沉map
    private isHeapMap: BaseObject; // 堆判断map

    constructor(props: ArrayBinaryHeapProps<T>) {
        if (props) {
            this.type = props.type
        } else {
            throw new RangeError(`type is must,place set heap type`)
        }
        // 设置比较方法
        if (props && props.compareFunc) {
            this._compareFunc = props.compareFunc;
        }
        // 初始化一些配置信息
        this._init()
    }

    /**
     * 初始化方法
     */
    _init() {
        this.swimMap = {
            [HeapType.MAX]: this.maxSwim,
            [HeapType.MIN]: this.minSwim,
        }
        this.sinkMap = {
            [HeapType.MAX]: this.maxSink,
            [HeapType.MIN]: this.minSink,
        }
        this.isHeapMap = {
            [HeapType.MAX]: this.isMaxHeapOrdered,
            [HeapType.MIN]: this.isMinHeapOrdered,
        }
    }


    /**
     * 是否为空
     */
    isEmpty(): boolean {
        return this.count === 0;
    }

    /**
     * 返回队列大小
     * @returns
     */
    size(): number {
        return this.count;
    }


    getList() {
        return this.list
    }



    /**
     * 由下至上的堆有序化（上浮）
     */
    swim(index: number) {
        const func = this.swimMap[this.type]
        if (func) {
            func.apply(this, [index])
        }
    }

    /**
     * 最大堆的上浮操作，说明当前节点的值大于父节点的值
     */
    maxSwim(index: number) {
        // 循环遍历，一直找是否是
        while (index > 1 && less<T>(this.list[index >> 1], this.list[index], this._compareFunc)) {
            exchange(this.list, index >> 1, index)
            index = index >> 1
        }
    }

    /**
     * 最小堆的上浮操作，说明当前节点的值小于父节点的值
     */
    minSwim(index: number) {
        // 循环遍历，一直找是否是
        while (index > 1 && greater<T>(this.list[index >> 1], this.list[index], this._compareFunc)) {
            exchange(this.list, index >> 1, index)
            index = index >> 1
        }
    }


    /**
     * 由上至下的堆有序化（下沉）
     */
    sink(index: number) {
        const func = this.sinkMap[this.type]
        if (func) {
            func.apply(this, [index])
        }
    }

    /**
     * 最大堆的下沉操作，说明当前节点小于子节点
     * @param index 
     */
    maxSink(index: number) {
        const len = this.list.length
        while (index * 2 <= len) {
            let firstNum = index * 2;
            // 如果第一个子节点比第二个子节点小，那么就用第二个子节点进行比对，总之找到最大的那个
            if (firstNum < len && less<T>(this.list[firstNum], this.list[firstNum + 1], this._compareFunc)) {
                firstNum++
            }
            // 如果当前值 不小于子节点的最大值，说明不需要移动
            if (!less<T>(this.list[index], this.list[firstNum], this._compareFunc)) {
                break
            }
            // 交换子节点的最大值和当前节点，然后将index设置为子节点的位置
            exchange(this.list, firstNum, index)
            index = firstNum
        }
    }

    /**
     * 最小堆的下沉操作，说明当前节点 大于 子节点
     * @param index 
     */
    minSink(index: number) {
        const len = this.list.length
        while (index * 2 <= this.count) {
            let firstNum = index * 2;
            // 如果第一个子节点比第二个子节点小，那么就用第二个子节点进行比对，总之找到最小的那个
            if (firstNum < this.count && greater<T>(this.list[firstNum], this.list[firstNum + 1], this._compareFunc)) {
                firstNum++
            }
            // 如果当前值 不大于 子节点的最小值，说明不需要移动
            if (!greater<T>(this.list[index], this.list[firstNum], this._compareFunc)) {
                break
            }
            // 交换子节点的最小值和当前节点，然后将index设置为子节点的位置
            exchange(this.list, firstNum, index)
            index = firstNum
        }
    }

    /**
     * 插入堆
     * 插入到末尾，然后进行上浮
     * @param val
     */
    insert(val: T) {
        this.list[++this.count] = val
        this.swim(this.count)
    }

    /**
     * 插入一组堆数据
     * @param list 
     */
    insertList(valList: T[]) {
        if (Array.isArray(valList)) {
            // TODO 最简单的方法，循环调用
            const len = valList.length;
            for (let i = 0; i < len; i++) {
                this.insert(valList[i])
            }

        }
    }

    /**
     * 重置数据
     * @param valList 
     */
    resetList(valList: T[]) {
        if (Array.isArray(valList)) {
            this.count = valList.length;
            this.list = []
            // 将值设置到数组中
            for (let i = 0; i < this.count; i++) {
                this.list[i + 1] = valList[i]
            }

            // count >> 1 是理论上最小的父节点
            for (let i = (this.count >> 1); i >= 1; i--) {
                this.sink(i)
            }
            this.isHeap()
        }
    }

    /**
     * 删除堆定元素
     * 删除堆顶元素后，将最后一个数据提到堆顶，然后进行下沉
     */
    delTop() {
        if (this.isEmpty()) {
            throw new RangeError(`list is as array which is null`);
        }
        // 将顶部的值和最后一个值进行交换
        exchange(this.list, 1, this.count--)
        // 取出最后一个值
        const topValue = this.list.pop()
        this.sink(1)
        return topValue
    }


    /**
     * 是不是最大堆
     */
    isHeap(): boolean {
        // 从1开始遍历，如果数据为null，则说明不是一个有序堆
        for (let i = 1; i <= this.count; i++) {
            if (this.list[i] === null) {
                return false
            }
        }
        // 如果第一个元素不为 null，也说明不是一个有序堆
        if (this.list[0] != null) {
            return false
        }

        const func = this.isHeapMap[this.type]
        if (func) {
            func.apply(this, [1])
        }
    }

    /**
     * 是最大堆吗？
     * @param index 
     */
    isMaxHeapOrdered(index: number): boolean {
        // index 大于 当前范围时返回true,因为递归会用到
        if (index > this.count) {
            return true
        }
        // 左右节点位置
        let left: number = index * 2;
        let right: number = left + 1;
        // 左节点在范围内，并且当前值小于左节点的时候，说明不是最大堆
        if (left <= this.count && less<T>(this.list[index], this.list[left], this._compareFunc)) {
            return false
        }
        // 右节点在范围内，并且当前节点小于右节点时，说明不是最大堆
        if (right <= this.count && less<T>(this.list[index], this.list[right], this._compareFunc)) {
            return false
        }
        // 递归左右节点
        return this.isMaxHeapOrdered(left) && this.isMaxHeapOrdered(right)
    }

    /**
     * 是最小堆吗？
     * @param index 
     * @returns 
     */
    isMinHeapOrdered(index: number): boolean {
        // index 大于 当前范围时返回true,因为递归会用到
        if (index > this.count) {
            return true
        }
        // 左右节点位置
        let left: number = index * 2;
        let right: number = left + 1;
        // 左节点在范围内，并且当前值大于左节点的时候，说明不是最小堆
        if (left <= this.count && greater<T>(this.list[index], this.list[left], this._compareFunc)) {
            return false
        }
        // 右节点在范围内，并且当前节点大于右节点时，说明不是最小堆
        if (right <= this.count && greater<T>(this.list[index], this.list[right], this._compareFunc)) {
            return false
        }
        // 递归左右节点
        return this.isMaxHeapOrdered(left) && this.isMaxHeapOrdered(right)
    }
}



const heap = new ArrayBinaryHeap({ type: HeapType.MIN })
var a = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
heap.resetList(a)

console.log(heap.getList())
