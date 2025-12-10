// Find the first Non-Repeating Element in an Array


function firstNonRepeating(arr) {
    let freq = {};

    // Step 1: build frequency map
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (freq[val] !== undefined) {
            freq[val] += 1;
        } else {
            freq[val] = 1;
        }
    }

    // Step 2: find first value with freq === 1
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (freq[val] === 1) {
            return val;
        }
    }

    return undefined;
}

let abc = [1, 1, 1, 1, 2, 3, 4, 5];
console.log(firstNonRepeating(abc)); // 2
