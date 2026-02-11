// QUESTION 62 — Top K Frequent Elements

function topKFrequent(nums, k) {
    if (!Array.isArray(nums) || typeof k !== "number") {
        return []
    }

    let freq = {};

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    let entities = Object.entries(freq)

    entities.sort((a, b) => b[1] = a[1])

    let result = []

    for (let i = 0; i < k && i < entities.length; i++) {
        result.push(Number(entities[i][0]))
    }

    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));   // [1,2]
console.log(topKFrequent([4, 4, 4, 4, 6, 6, 6, 7, 7], 1)); // [4]
console.log(topKFrequent([1], 1)); // [1]