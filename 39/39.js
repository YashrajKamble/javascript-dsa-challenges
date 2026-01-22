// QUESTION 39 — Check if a String Is a Subsequence of Another String

function isSubsequence(sub, arr) {
    if (typeof sub !== "string" || typeof arr !== "string") {
        return false;
    }

    let i = 0;

    for (let j = 0; j < arr.length && i < sub.length; j++) {
        if (sub[i] === arr[j]) {
            i++;
        }
    }
    return i === sub.length;
}

console.log(isSubsequence("abc", "aabcc"))
// true

console.log(isSubsequence("abc", "cba"))
// false

console.log(isSubsequence("abc", "wwwwwabc"))
// true