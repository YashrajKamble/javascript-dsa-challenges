// QUESTION 43 — Find the Majority Element in an Array

function majorityElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    let freq = {};
    let limit = Math.floor(arr.length / 2)

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        freq[val] = (freq[val] || 0) + 1;

        if (freq[val] > limit) {
            return val;
        }
    }
}

console.log(majorityElement([1, 1, 1, 2, 2, 2, 2]))
// 2

console.log(majorityElement([1, 1, 1, 1, 2, 2, 2]))
// 1