// QUESTION 56 — Maximum Sum Subarray (Kadane’s Algorithm)

function maxSubArray(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}

console.log(maxSubArray([1, 2, 3]))
// 6