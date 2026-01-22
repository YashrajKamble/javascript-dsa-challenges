// QUESTION 40 — Find the Longest Common Prefix Among Strings

function longestCommonPrefix(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "";
    }

    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let j = 0;

        while (
            j < prefix.length &&
            j < arr[i].length &&
            prefix[j] === arr[i][j]
        ) {
            j++
        }

        prefix = prefix.slice(0, j)

        if (prefix === "") {
            return "";
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["abc", "abced", "abcwerw"]))
// abc

console.log(longestCommonPrefix(["123", "123", "123"]))
// 123

console.log(longestCommonPrefix(["123", "145", "123"]))
// 1