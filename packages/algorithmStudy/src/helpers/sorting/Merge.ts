import { SortBase } from "./base";
// import { exchange, less, greater } from "@/utils/index";
import { exchange, less, greater } from "../../utils/index";

/**
 * 归并排序，即将两个有序的数组归并成一个更大的有序数组，这实际上是二分的一种体现
 */
export class Merge<T extends number> extends SortBase<T> {

    /**
     * 原地归并的抽象方法，处理两个列表，这里用两个列表是因为需要保证一个列表的调整不会影响到另一个列表的变换，否则用一个在变换的时候，就会出现问题，这个可以优化
     */
    private merge(target: Array<T>, list: Array<T>, left: number, mid: number, right: number) {
        // TODO 注意，这里的有序只的是从小到大进行排序
        // 首先判断列表是否是有序的
        this.isSorted(target, left, mid)
        this.isSorted(list, mid + 1, right)

        // 需要把target的数据合并到list中
        for (let i = left; i <= right; i++) {
            list[i] = target[i]
        };

        // 这里是对数组进行合并了
        let i: number = left, j = mid + 1;
        for (let k = left; k <= right; k++) {
            if (i > mid) {
                // i > mid 的时候，说明左半部已经排完了，这个时候，只需要拍右半部剩下的即可
                target[k] = list[j++];
            } else if (j > right) {
                // j > right 的时候，说明右半部已经排完了，这个时候，只需要排左半部剩下的即可
                target[k] = list[i++];
            } else if (less(list[i], list[j], this._compareFunc)) {
                // 如果list[i] < list[j] 则将list[i]的值赋值给target[k]
                target[k] = list[i++]
            } else {
                // 如果list[i] >= list[j] 则将list[j]的值赋值给target[k]
                target[k] = list[j++]
            }
        }
    }

    /**
     * 原地归并，只在一个当前数组上做操作，不使用额外的空间
     * @param target 
     * @param left 
     * @param mid 
     * @param right 
     */
    private mergeOneList(target: Array<T>, left: number, mid: number, right: number) {
        // TODO 注意，这里的有序只的是从小到大进行排序
        // 首先判断列表是否是有序的
        this.isSorted(target, left, mid)

        // 这里是对数组进行合并了
        let i: number = left, j: number = mid + 1;
        for (let k = left; k < right; k++) {
            // 如果target[k] > target[j],则交换位置
            if (greater(target[i], target[j], this._compareFunc)) {
                const index = j;
                const temp = target[k]
                target[k] = target[j++]
                target[index] = temp;
                if (k === i) {
                    i = index
                }
            } else {
                if (i === k) {
                    i++;
                } else {
                    const temp = target[k];
                    target[k] = target[i];
                    target[i] = temp;
                    if (j - i > 1) {
                        i++
                    }
                }
            }
        }
    }

    /**
     * 是否已经排序
     * @param list 
     * @param start 
     * @param end 
     */
    private isSorted(list: Array<T>, start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        // 遍历看是否满足，从小到大排序
        for (let i = start + 1; i <= end; i++) {
            if (less<T>(list[i], list[i - 1], this._compareFunc)) {
                return false
            }
        }
        return true
    }

    /**
     * 排序，利用二分，不断将数据二分归并，深度优先
     * @param list 
     */
    sort(list: Array<T>, start?: number, end?: number): void {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length
        }
        // start 和 end 相等的时候，说明只有一个数字，直接返回即可
        if (start === end) {
            return
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        let mid = start + ((end - start) >> 1);
        this.sort(list, start, mid)
        this.sort(list, mid + 1, end)
        this.mergeOneList(list, start, mid, end)
        console.log(list)
        console.log(start,mid,end)
    }
}

const sortInterface = new Merge();
let list = [5, 4, 3, 2, 1, 9, 10, 21, 32, 19, 7, 8, 12, 14, 15];
console.log(list);
sortInterface.sort(list);
console.log(list);
