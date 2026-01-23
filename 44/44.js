// QUESTION 44 — Find the Longest Consecutive Sequence in an Array

function longestConsecutive(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    let set = new Set(arr);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }
            maxLength = Math.max(maxLength, length)
        }
    }
    return maxLength;
}

console.log(longestConsecutive([22, 55, 7, 6, 5, 4, 3, 2, 1]))
// 0
console.log(longestConsecutive([22, 55, 1, 2, 3, 4, 5, 6, 7]))
// 7