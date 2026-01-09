// QUESTION 27 — Remove Duplicate Characters from a String (Preserve Order)

function removeDuplicateChars(str) {
    if (typeof str !== "string" || str.length === 0 || str.trim() === "") {
        return "";
    }

    let seen = new Set();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (!seen.has(char)) {
            seen.add(char)
            result += char;
        }
    }
    return result;
}

console.log(removeDuplicateChars("abca"))
// abc
console.log(removeDuplicateChars("abcc"))
// abc
console.log(removeDuplicateChars("abc"))
// abc
console.log(removeDuplicateChars("aabbacc"))
// abc