// immutable version

function removeDuplicates(arr) {
    let seen = new Set();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (!seen.has(val)) {
            seen.add(val);
            result.push(val);
        }
    }

    return result;
}

let a = [1, 1, 1, 2, 3, 4, 5, 5, 5, 5];
let b = removeDuplicates(a);

console.log(a); // [1,1,1,2,3,4,5,5,5,5]
console.log(b); // [1,2,3,4,5]


// mutable version
function removeDuplicates(arr) {
    let seen = new Set();

    let i = 0;
    while (i < arr.length) {
        if (seen.has(arr[i])) {
            arr.splice(i, 1);
        } else {
            seen.add(arr[i]);
            i++;
        }
    }
    return arr;
}

let abc = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 8, 9, 9];
removeDuplicates(abc);

console.log(abc);
// expected: [1,2,3,4,5,6,7,8,9]

