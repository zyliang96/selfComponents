import { SortBase } from "./base";
import { exchange, greater } from "@/utils/index";
/**
 * 冒泡排序
 * 冒泡排序的核心是，将最大的放到最后，和选择排序实际上是选择上的不同,有个问题需要注意的是，冒泡排序比选择排序需要进行更多次比较
 *
 */
export class Bubble<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                // 如果第一个比后面的大，则把大的放到后面去
                if (greater<T>(list[j], list[j + 1], this._compareFunc)) {
                    exchange(list, j, j + 1);
                }
            }
        }
    }
}
