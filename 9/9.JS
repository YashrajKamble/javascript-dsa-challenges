// QUESTION 9 — Flatten a One-Level Nested Array

function flattenOneLevel(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (Array.isArray(val)) {
            for (let j = 0; j < val.length; j++) {
                result.push(val[j])
            }
        } else {
            result.push(val)
        }
    }
    return result
}

console.log(flattenOneLevel([1, 2, [1, 2]]))
// [1,2,1,2]

console.log(flattenOneLevel([1, 2, [1, 2, [1, 2]]]))
// [1,2,1,2,1,2]