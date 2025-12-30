// QUESTION 11 — Remove Falsy Values from an Array

function removeFalsy(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val) {
            result.push(val)
        }
    }
    return result;
}

console.log(removeFalsy([1, 2, 3, "", 0, undefined, null, NaN, false]))
// [1,2,3]