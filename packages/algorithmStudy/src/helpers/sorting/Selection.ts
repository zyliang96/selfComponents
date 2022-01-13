import { SortBase } from "./base";
import { exchange, less } from "@/utils/index";
/**
 * 选择排序
 * 选择排序的核心就是，顺序寻找从当前位置起，最小的元素，然后放到当前位置
 */
export class Selection<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (less<T>(list[min], list[j], this._compareFunc)) {
                    min = j;
                }
            }
            exchange(list, i, min);
        }
    }
}
