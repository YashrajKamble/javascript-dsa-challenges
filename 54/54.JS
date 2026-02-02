// QUESTION 54 — Move All Even Numbers to the End (In-Place)

function moveEvensToEnd(nums) {
    if (!Array.isArray(nums)) {
        return []
    }
    let write = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            let temp = nums[write]
            nums[write] = nums[i]
            nums[i] = temp
            write++;
        }
    }
    return nums;
}

console.log(moveEvensToEnd([2, 4, 6, 8, 11, 13, 15, 17, 19]));
// [
//   11, 13, 15, 17, 19,
//    4,  6,  8,  2
// ]