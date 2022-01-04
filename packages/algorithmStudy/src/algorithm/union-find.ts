/**
 * 使用路径压缩的加权 quick-union 算法
 *
 */
export class UF {
    private _count: number = 0; // 连通分量数量
    private idList: Array<number> = []; // 连通列表
    private _rank: Array<number> = []; // 路径大小

    constructor(n: number) {
        this._count = n;
        for (let i = 0; i < n; i++) {
            this.idList[i] = i;
            this._rank[i] = 0;
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
     * 一致向上找，找到id为自己的父节点id的值，说明是子节点
     * @param id
     */
    find(id: number): number {
        while (id !== this.idList[id]) {
            id = this.idList[id];
        }
        return id;
    }

    /**
     * p 和 q 之间增加一条连接
     * @param p
     * @param q
     */
    union(p: number, q: number): void {
        this.validate(p);
        this.validate(q);
        const pId = this.find(p);
        const qId = this.find(q);
        if (pId === qId) return;
        /**
         * 这里比较路径大小，路径一样大的时候，将一个加到另一个上，路径相加，不相等的时候，一方的路径肯定不会大于另一方的路径，所以原本的路径不需要进行改变
         * 这里加到另一个上，实际上只是多了一层路径，所以加一即可
         */
        const rankPId = this._rank[pId];
        const rankQId = this._rank[qId];
        if (rankPId < rankQId) {
            this.idList[pId] = qId;
        } else if (rankPId > rankQId) {
            this.idList[qId] = pId;
        } else {
            this.idList[pId] = qId;
            this._rank[pId]++;
        }
        this.idList[pId] = qId;
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

/**
 * quick-find
 * 在链接的时候，实际上将很多连通分量的根节点又做了重新的赋值，以此来达到对应连通分量的节点都有一个相同的父id
 * quick-find 方法方便了find操作，但是增加了union的执行时间，由于要遍历一遍数组，所以时间耗费会相对较大
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
        const pId = this.find(p);
        const qId = this.find(q);
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

/**
 * quick-union算法
 * 和quick-find相比，实际上就是同一个连通分量的父id可能是该连通分量上的任一节点，将连通的额外比较过程做了优化，将原先频繁的赋值改变的操作交给了对应的寻找父分量的过程
 * 这里实际上相当于在构造森林，find操作实际上就是找到根节点，这种操作减少了union的时间，find的时间最差是N，最优是 1 ， 但是整体相对于quick-find ，时间要减少不少
 */
export class QuickUnionUf {
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
     * 一致向上找，找到id为自己的父节点id的值，说明是子节点
     * @param id
     */
    find(id: number): number {
        while (id !== this.idList[id]) {
            id = this.idList[id];
        }
        return id;
    }

    /**
     * p 和 q 之间增加一条连接
     * @param p
     * @param q
     */
    union(p: number, q: number): void {
        this.validate(p);
        this.validate(q);
        const pId = this.find(p);
        const qId = this.find(q);
        if (pId === qId) return;
        this.idList[pId] = qId;
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

/**
 * 加权quick-union算法
 * 实际上核心就是将小树 链接到大树上,这样，就可以减少find的时候，调用更多的层级，但是这里的小树和大树的判断逻辑是按照节点数量来判断的，实际上这是不科学的，
 * 因为实际能减少的是路径，即层级
 */
export class WeightedQuickUnionUF {
    private _count: number = 0; // 连通分量数量
    private idList: Array<number> = []; // 连通列表
    private _size: Array<number> = []; // 大小

    constructor(n: number) {
        this._count = n;
        for (let i = 0; i < n; i++) {
            this.idList[i] = i;
            this._size[i] = 1;
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
     * 一致向上找，找到id为自己的父节点id的值，说明是子节点
     * @param id
     */
    find(id: number): number {
        while (id !== this.idList[id]) {
            id = this.idList[id];
        }
        return id;
    }

    /**
     * p 和 q 之间增加一条连接
     * @param p
     * @param q
     */
    union(p: number, q: number): void {
        this.validate(p);
        this.validate(q);
        const pId = this.find(p);
        const qId = this.find(q);
        if (pId === qId) return;
        // 加权体现在这里
        if (this._size[pId] < this._size[qId]) {
            this.idList[pId] = qId;
            this._size[qId] += this._size[pId];
        } else {
            this.idList[qId] = pId;
            this._size[pId] += this._size[qId];
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
