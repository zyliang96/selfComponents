import { SortBase } from "./base";
import { exchange, less } from "@/utils/index";
/**
 * 插入排序
 * 插入排序的逻辑是，将前面的排好序，然后将当前位置的插入到前面有序的序列中
 */
export class Insertion<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        for (let i = 1; i < len; i++) {
            for (let j = i; j >= 0; j--) {
                if (less<T>(list[j], list[j], this._compareFunc)) {
                    exchange(list, i, j);
                }
            }
        }
    }
}




