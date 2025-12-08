// immutable version

function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

let a = ["a", "b", "c"];
let b = reverseArray(a);

console.log(a); // ["a","b","c"]
console.log(b); // ["c","b","a"]




// mutable version
let a1 = [1, 2, 3];
let b1 = a1.reverse();

console.log(a1); // [3,2,1] — mutated
console.log(b1); // [3,2,1]

