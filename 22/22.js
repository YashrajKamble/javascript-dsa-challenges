// QUESTION 22 — Reverse a String (Without Built-ins)

function reverseString(str) {
    if (typeof str !== "string") {
        return "";
    }

    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("chatgpt"))
// "tgptahc"

console.log(reverseString("mam"))
// mam

console.log(reverseString("123"))
// 321

console.log(reverseString(123))
// ""