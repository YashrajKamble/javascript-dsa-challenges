// QUESTION 52 — Two Sum (Return Indices, Not Values)

function twoSum(arr, tar) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let complement = tar - num;

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(num, i)
    }
    return []
}

// Expected outputs
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6));     // [1,2]
console.log(twoSum([3, 3], 6));       // [0,1]