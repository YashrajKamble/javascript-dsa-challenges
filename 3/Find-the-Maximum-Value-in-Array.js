// INTERVIEW POV

function findMax(arr) {
    if (!arr || arr.length === 0)
        return undefined;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let abc = [1, 2, 3, 4, 5, 6, 7];
console.log(findMax(abc)); // expected: 7




// OTHER POV

// Method 1. Math.max(...array)
const steps = [5200, 8300, 7600, 9100];
const largest = Math.max(...steps);
console.log(largest);
9100


// Method 2. Loop through the array manually
const bills = [42, 57, 33, 68, 51];
let largest1 = bills[0];

for (let x of bills) {
    if (x > largest1) {
        largest1 = x;
    }
}
console.log(largest1);
68

// Method 3. Sort the array and pick the last item
const marks = [72, 88, 91, 67];
marks.sort((a, b) => a - b);
console.log(marks[marks.length - 1]);
91

// Method 4. reduce()
const sales = [1200, 1800, 1500, 2000];

const largest2 = sales.reduce((a, b) => {
    return a > b ? a : b;
});
console.log(largest2);
2000


// Method 5. Using Math.max.apply
const heights = [160, 172, 181, 169];
const largest3 = Math.max.apply(null, heights);
console.log(largest3);
181


