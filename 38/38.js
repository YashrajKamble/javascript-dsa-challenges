// QUESTION 38 — Find the Missing Numbers in a Range (Array)

function findMissingNumbers(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number") {
        return [];
    }

    let set = new Set(arr);
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(findMissingNumbers([1, 4], 5))
// [ 0, 1, 2, 3, 4, 5 ]

console.log(findMissingNumbers([4], 2))
// [0, 1, 2]