// QUESTION 41 — Remove Consecutive Duplicate Characters from a String (remove duplicate letter after same word )

function removeConsecutiveDuplicates(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "";
    }

    let result = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== str[i - 1]) {
            result += str[i]
        }
    }
    return result;
}

console.log(removeConsecutiveDuplicates("abcaabbccccbbaa"))
// abcabcba

console.log(removeConsecutiveDuplicates("abcaaabbbbcccccc"))
// abcabc

