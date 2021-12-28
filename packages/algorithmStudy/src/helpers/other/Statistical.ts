import { validateIsArray, isNumber, isExist } from "@/utils/index";

/**
 * 统计方法
 */
export class Statistical {
    /**
     * 校验开始结束值和列表长度时长符合要求
     * @param start
     * @param end
     * @param length
     */
    static validateSubarrayIndices(
        start: number,
        end: number,
        length: number
    ): void {
        if (start < 0 || start > end || end > length) {
            throw new RangeError(
                `subarray indices out of bounds: [ ${start} , ${end} )`
            );
        }
    }

    /**
     * 获取最大值
     * @param list
     * @param start
     * @param end
     */
    static max(list: Array<number>, start: number, end: number): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        let max: number = Number.NEGATIVE_INFINITY;
        for (let i = startNum; i < endNum; i++) {
            if (isNaN(list[i])) {
                return Number.NaN;
            }
            if (list[i] > max) {
                max = list[i];
            }
        }
        return max;
    }

    /**
     * 获取最小值
     * @param list
     * @param start
     * @param end
     */
    static min(list: Array<number>, start: number, end: number): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        let min: number = Number.POSITIVE_INFINITY;
        for (let i = startNum; i < endNum; i++) {
            if (isNaN(list[i])) {
                return Number.NaN;
            }
            if (list[i] < min) {
                min = list[i];
            }
        }
        return min;
    }

    /**
     * 所有值的和
     * @param list
     * @param start
     * @param end
     */
    static sum(list: Array<number>, start: number, end: number): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        let sum: number = 0;
        for (let i = startNum; i < endNum; i++) {
            sum += list[i];
        }
        return sum;
    }

    /**
     * 平均值
     * @param list
     * @param start
     * @param end
     */
    static mean(list: Array<number>, start: number, end: number): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        const sum: number = this.sum(list, startNum, endNum);
        const mean = sum / (endNum - startNum);
        return mean;
    }

    /**
     * sample variance 样本方差
     * @param list
     * @param start
     * @param end
     */
    static sampleVariance(
        list: Array<number>,
        start: number,
        end: number
    ): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        const avg: number = this.mean(list, startNum, endNum);
        let sum: number = 0;
        for (let i = startNum; i < endNum; i++) {
            sum += (list[i] - avg) * (list[i] - avg);
        }
        const variance: number = sum / (endNum - startNum - 1);

        return variance;
    }

    /**
     * sample standard deviation 样本标准差
     * @param list
     * @param start
     * @param end
     */
    static stddev(list: Array<number>, start: number, end: number): number {
        const sampleVariance: number = this.sampleVariance(list, start, end);
        const stddev: number = Math.sqrt(sampleVariance);
        return stddev;
    }

    /**
     * population variance 总体方差
     * @param list
     * @param start
     * @param end
     */
    static populationVariance(
        list: Array<number>,
        start: number,
        end: number
    ): number {
        validateIsArray(list);
        let endNum: number = list.length;
        let startNum: number = 0;
        if (isExist(start) && isExist(end)) {
            this.validateSubarrayIndices(start, end, endNum);
            startNum = start;
            endNum = end;
        }
        const avg: number = this.mean(list, startNum, endNum);
        let sum: number = 0;
        for (let i = startNum; i < endNum; i++) {
            sum += (list[i] - avg) * (list[i] - avg);
        }
        const variance: number = sum / (endNum - startNum);

        return variance;
    }

    /**
     * population standard deviation 总体标准差
     * @param list
     * @param start
     * @param end
     */
    static stddevPop(list: Array<number>, start: number, end: number): number {
        const populationVariance: number = this.populationVariance(
            list,
            start,
            end
        );
        const stddev: number = Math.sqrt(populationVariance);
        return stddev;
    }
}
