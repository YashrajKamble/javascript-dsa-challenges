// QUESTION 60 — Search in a Rotated Sorted Array

function searchRotated(nums, target) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid;
        }
        // left side sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
            //    right side sorted
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
}

// Expected outputs
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotated([1], 0));             // -1
console.log(searchRotated([6, 7, 1, 2, 3, 4, 5], 3)); // 4