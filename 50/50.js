// QUESTION 50 — Merge Two Sorted Arrays


function mergeSortedArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([], [1, 2]));
console.log(mergeSortedArrays([1, 2], []));
console.log(mergeSortedArrays([1, 1, 3], [1, 2]));


// next time when you give code then that time you also mention output of that code in given code and rest of process is same , two way learning process , no any changes