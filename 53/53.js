// QUESTION 53 — Remove All Occurrences of a Value In-Place

function removeElement(nums, val) {
    if (!Array.isArray(nums)) {
        return [];
    }
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++;
        }
    }
    return k
}

console.log(removeElement([1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7], 1))
// 6