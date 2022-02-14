import { Bubble } from "@/helpers/sorting/Bubble";
import { Selection } from "@/helpers/sorting/Selection";
import { Insertion } from "@/helpers/sorting/Insertion";
import { RandomSeq } from "@/helpers/other/Random";

function testFunc(): void {
    const list: number[] = RandomSeq({
        length: 20,
        start: 0,
        end: 100
    });

    console.log(list);
    const selectionInterface = new Selection<number>();
    const insertionInterface = new Insertion<number>();
    const bubbleInterface = new Bubble<number>();
    const queue = [];
    queue.push(selectionInterface, insertionInterface, bubbleInterface);
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
