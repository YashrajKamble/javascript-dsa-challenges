// QUESTION 15 — Find the First Duplicate in an Array

function firstDuplicate(arr) {
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (seen.has(val)) {
            return val;
        }
        seen.add(val);
    }
    return undefined;
}

console.log(firstDuplicate([1, 2, 3, 1, 2, 3, 4]))
// 1

console.log(firstDuplicate([1]))
// undefined

console.log(firstDuplicate(["a", "b", "c", "c"]))
// c