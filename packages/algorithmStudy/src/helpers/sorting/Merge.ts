import { SortBase } from "./base";
// import { exchange, less } from "@/utils/index";
import { exchange, less } from "../../utils/index";

/**
 * 归并排序，即将两个有序的数组归并成一个更大的有序数组，这实际上是二分的一种体现
 */
export class Merge<T extends number> extends SortBase<T> {

    /**
     * 原地归并的抽象方法
     */
    merge(target: Array<T>, list: Array<T>, left: number, mid: number, right: number) {
        
    }

    /**
     * 是否已经排序
     * @param list 
     * @param start 
     * @param end 
     */
    private isSorted(list: Array<T>, start: number, end: number) {
        if (!start) {
            start = 0
        }
        if (!end && end !== 0) {
            end = list.length
        }
        for (let i = start + 1; i <= end; i++) {
            if (less<T>(list[i], list[i - 1], this._compareFunc)) {
                return false
            }
        }
        return true
    }

    sort(list: Array<T>): void {
        let len = list.length;
        let h = 1;
        console.log(len);
        // 这里是获取一个划分的值
        while (h < Math.floor(len / 3)) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            console.log(h);
            // 这里的核心逻辑是，通过不同的划分区域大小，将数据排序，直到最后一次1个1个的排序，希尔排序的思想是将部分有序的数组再次排成有序的状态
            for (let i = h; i < len; i++) {
                // 按照h的宽度进行处理
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

const sortInterface = new Merge();
let list = [5, 4, 3, 2, 1, 9, 10, 21, 32, 19, 7, 8, 12, 14, 15];
console.log(list);
sortInterface.sort(list);
console.log(list);
