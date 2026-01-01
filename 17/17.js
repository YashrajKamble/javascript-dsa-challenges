// QUESTION 17 — Rotate an Array by K Steps (Right Rotation)

function rotateArray(arr, k) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }

    let n = arr.length;
    k = k % n;

    let result = [];

    for (let i = n - k; i < arr.length; i++) {
        result.push(arr[i]);
    }

    for (let i = 0; i < n - k; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 1))
// [5,1,2,3,4]

console.log(rotateArray([1, 2, 3, 4, 5], 2))
// [4,5,1,2,3]

console.log(rotateArray([1, 2, 3], 7))
// [3,1,2]