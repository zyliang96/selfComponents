/**
 * union-find 算法
 */
export class UF {
    private _count: number = 0; // 连通分量数量
}





/**
 * quick-find
 */
export class QuickFindUF {
    private _count: number = 0; // 连通分量数量
    private idList: Array<number> = []; // 连通列表

    constructor(n: number) {
        this._count = n;
        for (let i = 0; i < n; i++) {
            this.idList[i] = i;
        }
    }

    /**
     * 校验
     * @param p
     */
    validate(p: number) {
        const len = this.idList.length;
        if (p < 0 || p >= len) {
            throw new RangeError(`index ${p} is not between 0 and ${len - 1}`);
        }
    }

    /**
     * id所在分量的标识符
     * @param id
     */
    find(id: number): number {
        return this.idList[id];
    }

    /**
     * p 和 q 之间增加一条连接
     * @param p
     * @param q
     */
    union(p: number, q: number): void {
        this.validate(p);
        this.validate(q);
        const pId = this.idList[p];
        const qId = this.idList[q];
        if (pId === qId) return;
        for (let i = 0, len = this.idList.length; i < len; i++) {
            if (this.idList[i] === qId) {
                this.idList[i] = pId;
            }
        }
        this._count--;
    }

    /**
     * 如果p 和 q 处于同一个分量中返回true
     * @param p
     * @param q
     */
    connected(p: number, q: number): boolean {
        this.validate(p);
        this.validate(q);
        return this.idList[p] === this.idList[q];
    }

    /**
     * 连通分量的数量
     * @returns
     */
    count(): number {
        return this._count;
    }
}



export class QuickUnionUf{
    
}