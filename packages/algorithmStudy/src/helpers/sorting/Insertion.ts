import { SortBase } from "./base";
import { exchange, less } from "@/utils/index";
// import { exchange, less } from "../../utils/index";
/**
 * 插入排序
 * 插入排序的逻辑是，将前面的排好序，然后将当前位置的插入到前面有序的序列中
 */
export class Insertion<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        for (let i = 1; i < len; i++) {
            for (let j = i; j > 0; j--) {
                // 这里是从后往前比
                if (less<T>(list[j], list[j - 1], this._compareFunc)) {
                    exchange(list, j, j - 1);
                }
            }
        }
    }
}

/**
 * 插入排序优化
 * 插入排序优化的逻辑，第一次遍历，将所有比较大的元素都向右移动一位
 * 第二次遍历，从第3个数开始从后往前遍历，这个时候，如果后一个比前一个小，则将前一个往后移动一位，如果大于等于，则说明找到固定位置，则将当前位置替换为之前的元素
 */
export class InsertionX<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        let exchanges = 0;
        // 第一次遍历，将所有较大的元素都向右移动了一位，最终结果将最小的元素放到了第一位
        for (let i = len - 1; i > 0; i--) {
            if (less<T>(list[i], list[i - 1], this._compareFunc)) {
                exchange(list, i, i - 1);
                exchanges++;
            }
        }
        // 如果位置没有发生改变，所以说明顺序正确
        if (exchanges === 0) {
            return;
        }
        for (let i = 2; i < len; i++) {
            const item = list[i];
            let j = i;
            // 这里遍历是为了找打一个合适的位置，如果找到合适的位置，则替换
            while (less<T>(item, list[j - 1], this._compareFunc)) {
                list[j] = list[j - 1];
                j--;
            }
            list[j] = item;
        }
    }
}

/**
 * 二分插入排序
 * 将排序的部分，用二分法处理，减少比较次数
 */
export class BinaryInsertion<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        for (let i = 1; i < len; i++) {
            const item = list[i];
            let left = 0,
                right = i;
            // 二分查找，找到位置，left就是目标值
            while (left < right) {
                const mid = left + ((right - left) >> 1);
                if (less<T>(item, list[mid], this._compareFunc)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            console.log(i, left, right, list);
            // 将i 到 left前的所有元素都向后移动一位
            for (let j = i; j > left; j--) {
                list[j] = list[j - 1];
            }
            // 将left位置插入当前值
            list[left] = item;
        }
    }
}
