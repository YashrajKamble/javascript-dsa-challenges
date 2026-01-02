// QUESTION 20 — Check if Two Arrays Are Equal (Same Elements, Same Order)

function areArraysEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]))
// true

console.log(areArraysEqual([1, 2, 3], [1, 2]))
// false

console.log(areArraysEqual([1, 2, 3], [3, 1, 2]))
// false