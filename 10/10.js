// QUESTION 10 — Find the Second Largest Number in an Array

function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return undefined;
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val > max) {
            secondMax = max;
            max = val
        } else if (val < max && val > secondMax) {
            secondMax = val;
        }
    }

    if (secondMax === -Infinity) {
        return undefined;
    }

    return secondMax;
}

console.log(secondLargest([20, 3, 40, 30]))
// 30