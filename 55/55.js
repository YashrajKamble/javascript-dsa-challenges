// QUESTION 55 — Longest Substring Without Repeating Characters

function longestUniqueSubstring(str) {
    if (typeof str !== "string") {
        return 0;
    }

    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left])
            left++;
        }
        set.add(str[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength;
}


// Expected outputs
console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("bbbbb"));    // 1
console.log(longestUniqueSubstring("pwwkew"));   // 3
console.log(longestUniqueSubstring(""));         // 0