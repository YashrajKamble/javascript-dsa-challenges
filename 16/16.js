// QUESTION 16 — Find the Intersection of Two Arrays

function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let result = [];

    for (let i = 0; i < arr2.length; i++) {
        let val = arr2[i];

        if (set1.has(val) && !result.includes(val)) {
            result.push(val);
        }
    }
    return result;
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4]))
// [2,3]

console.log(arrayIntersection([1, 2, 3], [3, 4]))
// [3]

console.log(arrayIntersection([1, 2], [3, 4]))
// []