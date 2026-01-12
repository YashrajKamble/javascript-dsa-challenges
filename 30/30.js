// QUESTION 30 — Find the Most Frequent Element in an Array

function mostFrequent(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    let freq = {}
    let maxCount = 0;
    let result;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]

        freq[val] = (freq[val] || 0) + 1;

        if (freq[val] > maxCount) {
            maxCount = freq[val]
            result = val;
        }
    }
    return result
}

console.log(mostFrequent([1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]))
// 8

console.log(mostFrequent([99, 11, 22, 33]))
// 99