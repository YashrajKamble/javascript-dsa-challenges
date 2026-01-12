// QUESTION 31 — Check if a Number Is a Prime Number

function isPrime(num) {
    if (typeof num !== "number" || num <= 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11))
// true

console.log(isPrime(1))
// false

console.log(isPrime(""))
// false

console.log(isPrime(-2))
// false

console.log(isPrime(3))
// true