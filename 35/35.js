// QUESTION 35 — Count the Number of Digits in a Number

function countDigits(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
        return 0;
    }

    if (num === 0) {
        return 1;
    }

    num = Math.abs(num)
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10)
    }
    return count;
}

console.log(countDigits(12345))
// 5

console.log(countDigits(12))
// 2

console.log(countDigits(-112))
// 3