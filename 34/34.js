// QUESTION 36 — Find the Index of the First Occurrence of an Element

function firstIndex(arr, target) {
    if (!Array.isArray(arr)) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}

console.log(firstIndex([1, 2, 3, 4, 4], 4))
// 3

console.log(firstIndex([1, 2, 3, 4, 4], 1))
// 0

console.log(firstIndex([1, 2, 3, 4, 4], 5))
// -1