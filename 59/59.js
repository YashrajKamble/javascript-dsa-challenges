// QUESTION 59 — Find the Peak Element in an Array

function findPeakElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid
        }
    }
    return left;
}


/// Expected outputs
console.log(findPeakElement([1, 2, 3, 1]));        // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));  // 1 or 5
console.log(findPeakElement([1]));              // 0
console.log(findPeakElement([2, 1]));           //0
