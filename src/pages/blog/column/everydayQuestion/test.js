function quickSort(li, str, end) {
    if (str > end) {
        return;
    }
    mid = li[str];
    let l = str;
    let r = end;
    while (l < r) {
        while (l < r && li[r] > mid) {
            r -= 1;
        }
        li[l] = li[r];

        while (l < r && li[l] < mid) {
            l += 1;``
        }
        li[r] = li[l];
``
    }``
    li[l] = mid;
    console.log(li)
    quickSort(li, str, l - 1);
    quickSort(li, l + 1, end);
}
let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
quickSort(list, 0, list.length - 1);
console.log('end',list)