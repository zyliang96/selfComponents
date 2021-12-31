/**
 * 秒表
 */
export class Stopwatch {
    private startTime: number = 0; //开始时间

    constructor() {
        this.startTime = process.uptime(); // 初始化时间
    }

    /**
     * 重置开始时间
     */
    reset() {
        this.startTime = process.uptime();
    }

    /**
     * 获取运行时间
     */
    getElapsedTime(): number {
        const currentTime = process.uptime();
        const result = currentTime - this.startTime;
        return result;
    }
}
