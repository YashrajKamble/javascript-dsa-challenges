// QUESTION 13 — Check if an Array Is Sorted (Ascending)

function isSorted(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return true;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true
}

console.log(isSorted([1, 2, 3, 4]))
// true

console.log(isSorted([1, 2, 3, 4, 1, 2]))
// false

console.log(isSorted([5, 4, 3, 2, 1, 0]))
// false

console.log(isSorted([5]))
// true