import { SortBase } from "./base";
// import { exchange, less } from "@/utils/index";
import { exchange, less } from "../../utils/index";

/**
 * 希尔排序的核心是按照一定的规则将一些数据设置为有序，然后再将有序的数据继续处理为有序状态
 */
export class Shell<T extends number> extends SortBase<T> {
    sort(list: Array<T>): void {
        let len = list.length;
        let h = 1;
        console.log(len)
        // 这里是获取一个划分的值
        while (h < len / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            console.log(h);
            for (let i = h; i < len; i++) {
                for (
                    let j = i;
                    j >= h && less<T>(list[j], list[j - 1], this._compareFunc);
                    j -= h
                ) {
                    exchange(list, j, j - h);
                }
            }
            console.log(list);
            h = Math.floor(h / 3);
        }
    }
}

const sortInterface = new Shell();
let list = [5, 4, 3, 2, 1, 9, 10, 21, 32, 19, 7, 8, 12, 14, 15];
console.log(list);
sortInterface.sort(list);
console.log(list);
