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
            /**
             * j > right 说明，右侧的已经排完了，这个时候只排左侧剩余的，但是由于之前排序可能导致顺序出现问题,所以重新排列剩下的数据，
             * 此时i 为中间点，i左侧有序，i右侧有序，所以重新赋值i和j,重新进行归并
             */
            if (j > right) {
                j = i;
                i = k;
            }
            /**
             * i === j 的时候有两种情况，
             * 1、i已经遍历完成了，这个时候，k应该等于j-1,
             * 2、i没有遍历完成，此时 k 到 i 之间的数据降序，
             */
            if (i === j) {
                if (k === j) {
                    break;
                } else {
                    i = k
                }
            }
            if (greater(target[i], target[j], this._compareFunc)) {
                /**
                 * 如果target[i] > target[j]
                 * 1、将target[j] 复制给target[k],将原先target[k]位置上的值复制给target[j]
                 * 2、如果此时k 和 i 相等，那么i指向原先j的位置，其他情况则不变
                 * 3、然后j++
                 */
                exchange(target, k, j)
                if (k === i) {
                    i = j
                }
                j++
            } else {
                /**
                 * 如果target[i] <= target[j]的时候
                 * 1、如果i === k,那么直接i++即可
                 * 2、如何i !== k，执行上述的逻辑，然后需要将原先的target[k] 赋值到target[i]，这个时候，如果j 和 i 之间的距离大于1，
                 * 则需要将i向后移动一位（因为此时的target[i]会被当前的target[k]覆盖）
                 */
                if (k !== i) {
                    exchange(target, k, i)
                    if (j - i > 1) {
                        i++
                    }
                } else {
                    i++
                }
            }
        }
        // console.log(list)
        // console.log(left, mid, right)
    }

    /**
     * 合并结果通过位置数组处理
     * @param target 
     * @param indexList 
     * @param left 
     * @param mid 
     * @param right 
     */
    private mergeByIndex(target: Array<T>, indexList: Array<number>, left: number, mid: number, right: number) {
        // 首先判断列表是否是有序的
        this.isSorted(target, left, mid)

        // 这里是对数组进行合并了
        let i: number = left, j: number = mid + 1;
        for (let k = left; k < right; k++) {
            /**
             * j > right 说明，右侧的已经排完了，这个时候只排左侧剩余的，但是由于之前排序可能导致顺序出现问题,所以重新排列剩下的数据，
             * 此时i 为中间点，i左侧有序，i右侧有序，所以重新赋值i和j,重新进行归并
             */
            if (j > right) {
                j = i;
                i = k;
            }
            /**
             * i === j 的时候有两种情况，
             * 1、i已经遍历完成了，这个时候，k应该等于j-1,
             * 2、i没有遍历完成，此时 k 到 i 之间的数据降序，
             */
            if (i === j) {
                if (k === j) {
                    break;
                } else {
                    i = k
                }
            }
            if (greater(target[indexList[i]], target[indexList[j]], this._compareFunc)) {
                /**
                 * 如果target[i] > target[j]
                 * 1、将target[j] 复制给target[k],将原先target[k]位置上的值复制给target[j]
                 * 2、如果此时k 和 i 相等，那么i指向原先j的位置，其他情况则不变
                 * 3、然后j++
                 */
                exchange(indexList, k, j)
                if (k === i) {
                    i = j
                }
                j++
            } else {
                /**
                 * 如果target[i] <= target[j]的时候
                 * 1、如果i === k,那么直接i++即可
                 * 2、如何i !== k，执行上述的逻辑，然后需要将原先的target[k] 赋值到target[i]，这个时候，如果j 和 i 之间的距离大于1，
                 * 则需要将i向后移动一位（因为此时的target[i]会被当前的target[k]覆盖）
                 */
                if (k !== i) {
                    exchange(indexList, k, i)
                    if (j - i > 1) {
                        i++
                    }
                } else {
                    i++
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
            end = list.length - 1
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

    sortBase(list: Array<T>, start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length - 1
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
        this.sortBase(list, start, mid)
        this.sortBase(list, mid + 1, end)
        this.mergeOneList(list, start, mid, end)
    }

    /**
     * 排序，利用二分，不断将数据二分归并，深度优先
     * @param list 
     */
    sort(list: Array<T>): void {
        if (Array.isArray(list)) {
            let len = list.length
            this.sortBase(list, 0, len - 1)
        }
    }

    sortByIndex(list: Array<T>, indexList: Array<number>, start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length - 1
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
        this.sortByIndex(list, indexList, start, mid)
        this.sortByIndex(list, indexList, mid + 1, end)
        this.mergeByIndex(list, indexList, start, mid, end)
    }

    /**
     * 位置排序
     */
    indexSort(list: Array<T>) {
        let indexList = [];
        if (Array.isArray(list)) {
            const len = list.length;
            for (let i = 0; i < len; i++) {
                indexList.push(i)
            }
            this.sortByIndex(list, indexList, 0, len - 1)
        }
        return indexList

    }
}

/**
 * 自底向上归并
 */
export class MergeBU<T extends number> extends SortBase<T> {


    /**
    * 排序
    * @param list 
    */
    sort(list: Array<T>): void {
        if (Array.isArray(list)) {
            let len = list.length
            this.sortBase(list, 0, len - 1)
        }
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
        // start 和 end 相等的时候，说明只有一个数字，直接返回即可
        if (start === end) {
            return
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        const len = end - start
        let copyList = []
        for (let i = 1; i < len; i *= 2) {
            for (let j = start; j < end - i; j += i + i) {
                const mid = j + i - 1
                const currentEnd = Math.min(j + i + i - 1, end - 1)
                this.merge(list, copyList, j, mid, currentEnd)
            }
        }
        this.isSorted(list)
    }

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
            end = list.length - 1
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
}

/**
 * 归并排序优化，在数量级较小的情况下，使用插入排序，归并的时候，则根据数据范围进行优化处理
 */
export class MergeX<T extends number> extends SortBase<T> {
    private CUTOFF: number = 7;


    /**
    * 排序
    * @param list 
    */
    sort(list: Array<T>): void {
        if (Array.isArray(list)) {
            let len = list.length
            let copyList = []
            this.sortBase(list, copyList, 0, len - 1)
        }
    }

    sortBase(target: Array<T>, list: Array<T>, start?: number, end?: number) {
        // start如果不存在，则直接设置为0
        if (!start) {
            start = 0
        }
        // end不存在则设置为列表长度
        if (!end && end !== 0) {
            end = list.length - 1
        }
        // start 和 end 相等的时候，说明只有一个数字，直接返回即可
        if (start === end) {
            return
        }
        // 如果开始位置大于结束位置，则直接抛出错误
        if (start > end) {
            throw new RangeError(`start in must less than end`)
        }
        if (end < start + this.CUTOFF) {
            this.insertionSort(target, start, end)
            return
        }

        let mid = start + ((end - start) >> 1);
        this.sortBase(target, list, start, mid)
        this.sortBase(target, list, mid + 1, end)
        this.merge(target, list, start, mid, end)
        this.isSorted(target)


    }

    insertionSort(list: Array<T>, left: number, right: number): void {
        for (let i = left; i <= right; i++) {
            for (let j = i; j > 0; j--) {
                // 这里是从后往前比
                if (less<T>(list[j], list[j - 1], this._compareFunc)) {
                    exchange(list, j, j - 1);
                }
            }
        }
    }


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
            end = list.length - 1
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
}

const sortInterface = new Merge();
// let list = [5, 4, 3, 2, 1, 9, 10, 21, 32, 19, 7, 8, 12, 14, 15];
// let list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let list = [5, 4, 3, 2, 1, 9, 10,];
console.log(list);
const indexList = sortInterface.indexSort(list);
// console.log(list);
console.log(indexList);
