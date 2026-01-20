// QUESTION 33 — Check if a String Has Balanced Parentheses

function isBalanced(str) {
    if (typeof str !== "string") {
        return false;
    }

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++;
        } else if (str[i] === ")") {
            count--;
        }

        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log(isBalanced("()"))
// true

console.log(isBalanced("())"))
// false

console.log(isBalanced("(a+b)"))