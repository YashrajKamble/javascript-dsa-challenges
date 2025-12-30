// QUESTION 12 — Find the Missing Number in an Array

function findMissingNumber(arr) {
    let n = arr.length;

    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 0, 8, 9, 10]))
// 7