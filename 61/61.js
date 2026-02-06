// QUESTION 61 — Find the Minimum Element in a Rotated Sorted Array

function findMin(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return undefined;
    }

    let left = 0;
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid
        }
    }
    return nums[left]
}

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([1]));               