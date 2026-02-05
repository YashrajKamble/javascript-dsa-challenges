// QUESTION 58 — Binary Search (Iterative)

function binarySearch(arr, target) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }
    return -1
}

// Expected outputs
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2
console.log(binarySearch([1, 3, 5, 7, 9], 6)); // -1
console.log(binarySearch([], 1));          // -1
console.log(binarySearch([2], 2));         // 0