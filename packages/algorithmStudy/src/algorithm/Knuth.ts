import { isNumber, isExist, validateIsArray } from "@/utils/index";
import { Random } from "@/helpers/other/Random";
/**
 * Knuth shuffle 洗牌算法
 * 本质就是每一个位置上的数都等概率的选择，类似数学中，选指定长度的数，每次选中的数的概率是相等的
 */
export class Knuth {
    /**
     * 从选过的里面再次选择，这种方法可以看成是从最后一个开始选的方法
     * @param list
     * @returns
     */
    static shuffle<T>(list: Array<T>): Array<T> {
        validateIsArray(list);
        let len = list.length;
        for (let i = 0; i < len; i++) {
            const r = Math.floor(Random.random() * (i + 1));
            const temp = list[i];
            list[i] = list[r];
            list[r] = temp;
        }
        return list;
    }

    /**
     * 完全随机洗牌，正向选择
     * 将每一次的选择都在后续没有选中的数据中筛选
     * @param list
     */
    static shuffleAlternate<T>(list: Array<T>): Array<T> {
        validateIsArray(list);
        let len = list.length;
        for (let i = 0; i < len; i++) {
            // i 的取值范围是从 i 到 len - 1
            const r = i + Math.floor(Random.random() * (len - i));
            const temp = list[i];
            list[i] = list[r];
            list[r] = temp;
        }
        return list;
    }
}
