// Sum all numbers in an array

// interview POV
function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (typeof val === "number" && !Number.isNaN(val)) {
            sum += val;
        }
    }
    return sum;
}

let abc = [1, 2, 3, 4, 5];
console.log(sumArray(abc)); // 15


// other POV
// Classic for loop 
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // 15


// for...of
const arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (const v of arr1) sum1 += v;
console.log(sum1); // 15

// Array.prototype.reduce()
const arr2 = [1, 2, 3, 4, 5];
const sum2 = arr2.reduce((acc, v) => acc + v, 0);
console.log(sum2); // 15

// forEach()
const arr3 = [1, 2, 3, 4, 5];
let sum3 = 0;
arr3.forEach(v => sum3 += v);
console.log(sum3); // 15

// Skip non-numbers safely
const arr4 = [1, "2", NaN, 3, null];
const sum4 = arr4
    .filter(v => typeof v === "number" && !Number.isNaN(v))
    .reduce((acc, v) => acc + v, 0);
console.log(sum4); // 4

// Library helper (Lodash)
// npm install lodash
const _ = require('lodash');
const arr5 = [1, 2, 3, 4, 5];
console.log(_.sum(arr5)); // 15

// Very large integers (use BigInt when sums exceed safe integer range)
const arr6 = [9007199254740991n, 2n];
const sum6 = arr6.reduce((a, b) => a + b, 0n);
console.log(sum6); // 9007199254740993n
