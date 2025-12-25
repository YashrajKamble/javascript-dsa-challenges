// QUESTION 7 — Check if a String Is a Palindrome



function isPalindrome(str) {
    let cleaned = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            cleaned += str[i].toLowerCase();
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

console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("Madam"));       // true
console.log(isPalindrome("nurses run"));  // true
console.log(isPalindrome("sir"));         // false