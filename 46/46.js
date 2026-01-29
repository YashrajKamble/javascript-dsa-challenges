// QUESTION 46 — Check if a String Is a Valid Palindrome (Ignore Non-Alphanumeric)

function isValidPalindrome(str) {
    if (typeof str !== "string") {
        return false;
    }

    let cleaned = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (
            ch >= "a" && ch <= "z" ||
            ch >= "0" && ch <= "9"
        ) {
            cleaned += ch;
        }
    }

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // true
