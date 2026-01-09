// QUESTION 28 — Check if Two Strings Are Rotations of Each Other

function areRotations(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string" || str1.length !== str2.length) {
        return false;
    }
    let combined = str1 + str1;
    return combined.includes(str2)
}

console.log(areRotations("abcd", "dab1"))
// false

console.log(areRotations("abcd", "dabc"))
// true

console.log(areRotations("123", "456"))
// false