// QUESTION 32 — Find the Factorial of a Number (Iterative)

function factorial(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        return undefined
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0))
// 1

console.log(factorial(4))
// 24

console.log(factorial(10))
// 3628800