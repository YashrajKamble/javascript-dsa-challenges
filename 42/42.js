// QUESTION 42 — Find the First Missing Positive Integer

function firstMissingPositive(arr) {
    if (!Array.isArray(arr)) {
        return 1;
    }
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val > 0) {
            set.add(val);
        }
    }

    let missing = 1;
    while (true) {
        if (!set.has(missing)) {
            return missing;
        }
        missing++;
    }
}

console.log(firstMissingPositive([1, 2, 3, 5, 6]))
// 4
console.log(firstMissingPositive([2, 3, 5, 6]))
// 1
console.log(firstMissingPositive([-4, -3, -2, -1, 0, 1]))
// 2