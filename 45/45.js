// QUESTION 45 — Check if a Number Is a Power of Two

function isPowerOfTwo(n) {
    if (typeof n !== "number" || n <= 0) {
        return false;
    }

    return (n & (n - 1)) === 0;
}

// Tests
console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(2));  // true
console.log(isPowerOfTwo(4));  // true
console.log(isPowerOfTwo(16));  // false
console.log(isPowerOfTwo(0));  // false
console.log(isPowerOfTwo(-2)); // false