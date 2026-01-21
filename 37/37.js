// QUESTION 37 — Check if Two Arrays Have the Same Elements (Order Does NOT Matter)

function sameElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    let freq1 = {};
    let freq2 = {};

    for (let i = 0; i < arr1.length; i++) {
        let val1 = arr1[i]
        freq1[val1] = (freq1[val1] || 0) + 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        let val2 = arr2[i]
        freq2[val2] = (freq2[val2] || 0) + 1
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameElements([1, 2, 3], [1, 2, 3]))
// true
console.log(sameElements([1, 2, 3, 4, 5, 6], [4, 5, 6, 2, 3]))
// false