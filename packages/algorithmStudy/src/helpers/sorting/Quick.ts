import { SortBase } from "./base";
import { exchange, less } from "@/utils/index";
import { lstat } from "fs";
// import { exchange, less } from "../../utils/index";
/**
 * 快速排序
 * 插入排序的逻辑是，将前面的排好序，然后将当前位置的插入到前面有序的序列中
 */
export class Quick<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        this.sortBase(list, 0, len - 1)
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
        if (start < end) {
            let partitionIndex = this.partition(list, start, end);
            this.sortBase(list, start, partitionIndex)
            this.sortBase(list, partitionIndex + 1, end)
        }
        return list
    }

    /**
     * 分割数组
     * @param list 
     * @param left 
     * @param right 
     */
    partition(list: Array<T>, start: number, end: number): number {
        let left = start;
        // 这里 +1 是为了后续统一使用--end 的逻辑
        let right = end + 1;
        let target = list[left];
        while (true) {
            // 先遍历小于当前位置的
            while (less<T>(list[++left], target, this._compareFunc)) {
                if (left === end) {
                    break
                }
            }
            // 遍历右侧小于当前值的
            while (less<T>(target, list[--right], this._compareFunc)) {
                if (right === start) {
                    break
                }
            }
            // 如果start 大于等于 end 的时候，则说明比较完成，跳出循环。 
            if (left >= right) {
                break
            }
            // 经过前两次遍历，则可以找到左边第一个大于目标的，右边第一个小于目标的，这个时候交换这两个值的位置
            exchange(list, left, right)
        }
        // 这个时候交换目标值和start的位置，这个试试
        exchange(list, start, right)
        return right
    }

}


/**
 * 三向切分的快速排序
 * 三分法是将小于 等于 和 大于的做了区分，从而减小比较处理的次数
 * 三取样切分的问题在于，如果数组中重复元素不多的普通情况下，比标准的二分法多了很多次交换
 */
export class Quick3way<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        this.sortBase(list, 0, len - 1)
    }


    sortBase(list: Array<T>, start?: number, end?: number) {
        if (end <= start) {
            return
        }
        // 左右节点
        let left = start, right = end;
        // 目标值
        let target = list[left];
        // 遍历数据
        let i = start + 1;
        // 没有遍历完成的时候，经过这一步操作之后，[start,left-1]都是小于target的数据，[left,right]都是等于target的数据，[right+1,end]都是大于target的数据
        while (i <= right) {
            // list[i] 小于 target 的时候，交换left和right的值，并且都进行+1处理
            if (less<T>(list[i], target, this._compareFunc)) {
                exchange(list, i++, left++)
            } else if (less<T>(target, list[i], this._compareFunc)) {
                // list[i] 大于 target 的时候， 将 i 和 right 的值进行互换
                exchange(list, i, right--)
            } else {
                // list[i] 等于 target 的时候，值进行i的增加，是循环比那里下去
                i++
            }
        }
        this.sortBase(list, start, left - 1)
        this.sortBase(list, right + 1, end)
    }
}


/**
 * 快速排序优化(二路优化)
 * 1、在对应的数据量小于一定值的时候，进行插入排序
 * 2、选择比较目标是，选取左右节点和中间节点三个数中，居中的那个数据
 */
export class QuickX<T extends number> extends SortBase<T> {

    private INSERTION_SORT_CUTOFF: number = 8
    sort(list: Array<T>): void {
        let len = list.length;
        this.sortBase(list, 0, len - 1)
    }


    sortBase(list: Array<T>, start?: number, end?: number) {
        if (end <= start) {
            return
        }
        if (end < start + this.INSERTION_SORT_CUTOFF) {
            this.insertionSort(list, start, end)
            return
        }
        let i = this.partition(list, start, end)
        this.sortBase(list, start, i - 1)
        this.sortBase(list, i + 1, end)
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
 * 分割数组
 * @param list 
 * @param left 
 * @param right 
 */
    partition(list: Array<T>, start: number, end: number): number {
        // 这里找一个相对中间的数字，只是一种尝试
        let middleNum = this.median3(list, start, start + ((end - start) >> 1), end)
        exchange(list, start, middleNum)
        let left = start;
        // 这里 +1 是为了后续统一使用--end 的逻辑
        let right = end + 1;
        let target = list[left];
        // 先遍历小于当前位置的，如果和
        while (less<T>(list[++left], target, this._compareFunc)) {
            if (left === end) {
                exchange(list, start, end)
                return end
            }
        }
        // 遍历右侧小于当前值的
        while (less<T>(target, list[--right], this._compareFunc)) {
            if (right === start + 1) {
                return left
            }
        }
        // left 小于 right 的时候 说明还没有完全筛选，这个时候再次分组
        while (left < right) {
            // 小交换，因为上面的逻辑找到了左边第一个大于目标的，右边第一个小于目标的
            exchange(list, left, right)
            while (less<T>(list[++left], target, this._compareFunc)) { }
            while (less<T>(target, list[--right], this._compareFunc)) { }
        }
        // 这个时候交换目标值和start的位置，这个试试
        exchange(list, start, right)
        return right
    }

    /**
     * 找出三个数中的中位数
     * 两两比较对于三个数来说应该是最快的
     * @param list 
     * @param left 
     * @param middle 
     * @param right 
     */
    median3(list: Array<T>, left: number, middle: number, right: number) {
        return (less<T>(list[left], list[middle], this._compareFunc)) ?
            ((less<T>(list[middle], list[right], this._compareFunc)) ? middle : less<T>(list[left], list[right], this._compareFunc) ? right : left) :
            ((less<T>(list[right], list[middle], this._compareFunc)) ? middle : less<T>(list[right], list[left], this._compareFunc) ? right : left)
    }
}






