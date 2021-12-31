/**
 * 简单线性回归
 */
export class LinearRegression {
    private _slop: number; // 斜率
    private _intercept: number; // 偏移量(截距)
    private r2: number; // 决定系数（R方）
    private _xArr: Array<number> = []; // x合集
    private _yArr: Array<number> = []; // y合集
    private svar1: number; // TODO 不知道是啥
    private svar0: number; // TODO 不知道是啥

    intercept(): number {
        return this._intercept;
    }

    slope(): number {
        return this._slop;
    }

    R2(): number {
        return this.r2;
    }

    constructor(xList: Array<number>, yList: Array<number>) {
        if (this.validateArguments(xList, yList)) {
            this._xArr = xList;
            this._yArr = yList;
        } else {
            throw new RangeError(
                `xList and yList must is Array and xList's length is same as yList's length`
            );
        }
    }

    validateArguments(x: Array<number>, y: Array<number>): boolean {
        return Array.isArray(x) && Array.isArray(y) && x.length === y.length;
    }

    /**
     * 简单求线性回归方程
     * 规则：获取平均值，得到的是一个近似值，但未必是最优解，有可能有很大的偏差
     */
    simpleLinearRegression(x: Array<number>, y: Array<number>): void {
        // 坐标和
        let sumX = 0;
        let sumY = 0;
        const len = x.length;
        for (let i = 0; i < len; i++) {
            sumX += x[i];
            sumY += y[i];
        }
        // 平均值
        const argX = sumX / len;
        const argY = sumY / len;

        let xxBar = 0;
        let yyBar = 0;
        let xyBar = 0;
        for (let i = 0; i < len; i++) {
            xxBar += (x[i] - argX) * (x[i] - argX);
            yyBar += (y[i] - argY) * (y[i] - argY);
            xyBar += (x[i] - argX) * (y[i] - argY);
        }
        // 斜率
        this._slop = xyBar / xxBar;
        // 偏移量(截距)
        this._intercept = argY - this._slop * argX;

        // 更多的数据分析
        let rss = 0; // 残差平方和,输入值 - 线性回归线求出的值  的 平方
        let ssr = 0; // 回归平方和,线性回归线求出的值 - 平均值  的 平方
        for (let i = 0; i < len; i++) {
            const fix = this._slop * x[i] + this._intercept;
            rss += (fix - y[i]) * (fix - y[i]);
            ssr += (fix - argY) * (fix - argY);
        }
        const degreesOfFreedom = len - 2; // 自由度 自由度计算公式：自由度=样本个数-样本数据受约束条件的个数，即df = n - k（df自由度，n样本个数，k约束条件个数）
        // r2 (决定系数) = RSS(残差平方和) / TSS(总平方和)
        this.r2 = rss / yyBar;
        // TODO 下面的不懂
        const svar = rss / degreesOfFreedom;
        this.svar1 = svar / xxBar;
        this.svar0 = svar / len + argX * argX * this.svar1;
    }

    /**
     * TODO 不知道是啥
     * @returns
     */
    interceptStdErr(): number {
        return Math.sqrt(this.svar0);
    }

    /**
     * TODO 不知道是啥
     * @returns
     */
    slopeStdErr(): number {
        return Math.sqrt(this.svar1);
    }

    /**
     * 预测
     * @param x
     */
    predict(x: number): number {
        return this._slop * x + this._intercept;
    }
}
