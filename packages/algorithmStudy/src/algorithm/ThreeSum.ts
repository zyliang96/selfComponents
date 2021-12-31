import { validateIsArray } from "@/utils/index";
import { binarySearchFunc } from "@/helpers/search/BinarySearch";
/**
 * 求数组中三项和为0的个数
 */
export class ThreeSum {
    /**
     * 默认的排序方法 N ^ 3
     * @param list
     * @returns
     */
    static defaultCount(list: Array<number>): number {
        validateIsArray(list);
        let count = 0;
        const len = list.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                for (let z = j + 1; z < len; z++) {
                    if (list[i] + list[j] + list[z] === 0) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    /**
     * 通过二分查找方法处理 N ^ 2 * LogN
     * @param list
     * @returns
     */
    static fastCount(list: Array<number>): number {
        validateIsArray(list);
        let count = 0;
        const len = list.length;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                const k = binarySearchFunc(list, -(list[i] + list[j]));
                if (k > j) {
                    count++;
                }
            }
        }
        return count;
    }
}