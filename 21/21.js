// QUESTION 21 — Remove a Specific Element from an Array (Immutable)

function removeElement(arr, value) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(removeElement([1, 2, 3, 4, 4, 4, 4, 4], 4))
// [1,2,3]

console.log(removeElement([1, 2, 3, 4, 4, 4, 4, 4], 9))
// [1,2,3,4,4,4,4,4]
