// QUESTION 8 — Check if Two Strings Are Anagrams

function isAnagram(str1, str2) {
    let s1 = "";
    let s2 = "";

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== " ") {
            s1 += str1[i].toLowerCase();
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== " ") {
            s2 += str2[i].toLowerCase();
        }
    }

    if (s1.length !== s2.length) {
        return false;
    }

    let freq = {}
    for (let i = 0; i < s1.length; i++) {
        let char = s1[i];
        if (freq[char] !== undefined) {
            freq[char] += 1;
        } else {
            freq[char] = 1;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let char = s2[i];
        if (!freq[char]) {
            return false;
        }
        freq[char] -= 1;
    }
    return true;
}

console.log(isAnagram("listen", "silent"));       // true
console.log(isAnagram("Listen", "Silent"));       // true
console.log(isAnagram("rail safety", "fairy tales")); // true
console.log(isAnagram("hello", "world"));         // false