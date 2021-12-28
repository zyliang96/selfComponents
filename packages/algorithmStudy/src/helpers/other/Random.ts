import { isNumber, isExist, validateIsArray } from "@/utils/index";
/**
 * 随机数
 */
export class Random {
    /**
     * 返回 0 到 1 之间的实数
     */
    static random(): number {
        return Math.random();
    }

    /**
     * 返回0 到 N-1之间的整数
     * @param N
     */
    static uniformIntFormZero(N: number): number {
        return Math.floor(this.random() * N);
    }

    /**
     * 返回0 到 N-1之间的实数
     * @param N
     */
    static uniformFloatFormZero(N: number): number {
        return this.random() * N;
    }

    /**
     * 返回 从 start 到 end 之间的整数
     * @param start
     * @param end
     */
    static uniformInt(start: number, end: number): number {
        if (!(start < end)) {
            throw new RangeError(`invalid range: [ ${start} , ${end} )`);
        }
        return start + this.uniformIntFormZero(end - start);
    }

    /**
     * 返回从 start 到 end 之间的实数
     * @param start
     * @param end
     */
    static uniformFloat(start: number, end: number): number {
        if (!(start < end)) {
            throw new RangeError(`invalid range: [ ${start} , ${end} )`);
        }
        return start + this.uniformFloatFormZero(end - start);
    }

    /**
     * 返回真的概率为probability
     * @param p the probability
     */
    static bernoulli(p: number): boolean {
        if (!(p >= 0 && p <= 1)) {
            throw new RangeError(
                `probability p must be between 0 and 1 : ${p}`
            );
        }
        return this.random() < p;
    }

    /**
     * 正态分布，期望值为0，标准差为1
     * 可以参考  https://jishuin.proginn.com/p/763bfbd60053 有详细的推导过程，基本上是通过正态分布的导数，利用Box-Muller 解出来
     */
    static gaussian(): number {
        let r, x, y;
        do {
            x = this.uniformInt(-1, 1);
            y = this.uniformInt(-1, 1);
            r = x * x + y * y;
        } while (r >= 1 || r == 0);
        return x * Math.sqrt((-2 * Math.log(r)) / r);
    }

    /**
     * 正态分布，期望值为mu，标准差为sigma
     * @param mu the mean
     * @param sigma the standard deviation
     */
    static gaussianFrom(mu: number, sigma: number): number {
        return mu + sigma * this.gaussian();
    }

    /**
     * 返回i的概率为a[i]
     * 实际上就是判断一下加起来的值，是否超过了随机概率
     * @param list
     */
    static discrete(list: Array<number>): number {
        validateIsArray(list);
        let sum = 0;
        const len = list.length;
        for (let i = 0; i < len; i++) {
            if (!(list[i] >= 0)) {
                throw new RangeError(
                    `array entry ${i} must be non-negative: ${list[i]}`
                );
            }
            sum += list[i];
        }
        if (sum > 1 || sum < 1) {
            throw new RangeError(
                `sum of array entries does not approximately equal 1.0: ${sum}`
            );
        }
        while (true) {
            const r = this.random();
            let sum = 0;
            for (let i = 0; i < len; i++) {
                sum += list[i];
                if (sum > r) {
                    return i;
                }
            }
        }
    }

    /**
     * 将数组 list 随机排序
     * 就是通过随机数，调换位置,当前位置只能和后面的位置做替换
     * @param list
     */
    static shuffle(list: Array<number>): void {
        validateIsArray(list);
        const len = list.length;
        for (let i = 0; i < len; i++) {
            const r = i + this.uniformFloatFormZero(len - i);
            const temp = list[i];
            list[i] = list[r];
            list[r] = temp;
        }
    }
}

export interface RandomSeqOptions {
    length?: number; // 长度
    start?: number; // 数据开始值
    end?: number; // 数据结束值
}
/**
 * 任意随机数组
 */
export function RandomSeq(options: RandomSeqOptions = {}): Array<number> {
    const { length, start = 0, end = 1 } = options;
    if (!isNumber(length)) {
        throw new SyntaxError(`length is must number or number string`);
    }
    let isHasRange = false;
    if (isExist(start) && isExist(end) && isNumber(start) && isNumber(end)) {
        isHasRange = true;
    }
    const num: number = Math.floor(Number(length));
    const list: Array<number> = [];
    for (let i = 0; i < num; i++) {
        const r = isHasRange
            ? Random.uniformFloat(start, end)
            : Random.random();
        list.push(r);
    }
    return list;
}
