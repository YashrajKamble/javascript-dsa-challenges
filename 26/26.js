// QUESTION 26 — Find the First Non-Repeating Character in a String

function firstNonRepeatingChar(str) {
    if (typeof str !== "string" || str.length === 0) {
        return null
    }

    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (freq[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("aabbccd"))
// d
console.log(firstNonRepeatingChar("abccb"))
// a
console.log(firstNonRepeatingChar("a"))
// a
console.log(firstNonRepeatingChar("aa"))
// null

