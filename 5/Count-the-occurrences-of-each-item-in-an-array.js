// Count the occurrences of each item in an array

// INterview POV
function countOccurrences(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (result[val] !== undefined) {
            result[val] += 1;
        } else {
            result[val] = 1;
        }
    }

    return result;
}

let abc = [1, 1, 1, 1];
console.log(countOccurrences(abc)); // {1: 4}
