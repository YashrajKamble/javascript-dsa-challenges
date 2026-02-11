// QUESTION 63 — Longest Increasing Subsequence (Length Only)

function lengthOfLIS(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
    let n = nums.length;
    let dp = new Array(n).fill(1)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

// Expected outputs
console.log(lengthOfLIS([10, 9, 2, 5]));   //2
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));         // 4
console.log(lengthOfLIS([7, 7, 7, 7, 7]));           // 1
console.log(lengthOfLIS([1]));                   // 1
console.log(lengthOfLIS([1, 2, 3]));                   // 3
