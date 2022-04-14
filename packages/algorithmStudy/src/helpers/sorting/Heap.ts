import { SortBase } from "./base";
// import { exchange, less, greater } from "@/utils/index";
import { exchange, less, greater } from "../../utils/index";

/**
 * 堆排序
 */
export class HeapSort<T extends number> extends SortBase<T> {

    sort(list: Array<T>) {
        list.unshift(null)
        this.sortBase(list, 1, list.length - 1)
        list.shift()
    }

    sortBase(list: Array<T>, start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length - 1
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        // 构建有序的最大堆
        for (let i = (start + ((end - start) >> 1)); i >= 1; i--) {
            this.sink(list, i, end)
        }
        let i = end
        // 使堆变成有序的列表
        while (i > 1) {
            // 因为堆本身是最大堆，所以将堆顶最大的数据放到最后即可
            exchange(list, 1, i--)
            // 重新构建最大堆
            this.sink(list, 1, i)
        }
    }

    /**
     * 下沉
     */
    sink(list: Array<T>, index: number, len: number) {
        while (2 * index <= len) {
            let j = 2 * index
            if (j < len && less(list[j], list[j + 1], this._compareFunc)) {
                j++
            }
            if (!less(list[index], list[j])) {
                break
            }
            exchange(list, index, j)
            index = j
        }
    }
}