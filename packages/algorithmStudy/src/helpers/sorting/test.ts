import { Selection } from "./Selection";
import { Insertion } from "./Insertion";
import { RandomSeq } from "../other/Random";

function testFunc(): void {
    const list: number[] = RandomSeq({
        length: 20,
        start: 0,
        end: 100
    });

    console.log(list);
    const selectionInterface = new Selection<number>();
    const insertionInterface = new Insertion<number>();
    const queue = [];
    queue.push(selectionInterface, insertionInterface);
    for (let i = 0, len = queue.length; i < len; i++) {
        const item = queue[i];
        const testList = [].concat(list);
        item.sort(testList);
        console.log(testList);
    }
}

(function main() {
    testFunc();
})();
