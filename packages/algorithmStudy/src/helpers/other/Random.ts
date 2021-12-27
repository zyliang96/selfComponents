class Random {
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
     */
    static gaussian(): number {}

    /**
     * 正态分布，期望值为mu，标准差为sigma
     * @param mu the mean
     * @param sigma the standard deviation
     */
    static gaussianFrom(mu: number, sigma: number): number {}

    /**
     * 返回i的概率为a[i]
     * @param list
     */
    static discrete(list: Array<number>): number {}

    /**
     * 将数组 list 随机排序
     * @param list
     */
    static shuffle(list: Array<number>): void {}
}
