// QUESTION 23 — Count Vowels in a String

function countVowels(str) {
    if (typeof str !== "string") {
        return 0;
    }

    let count = 0;
    let vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"))
// 2

console.log(countVowels("javascript"))
// 3

console.log(countVowels("nextjs"))
// 1

console.log(countVowels("123"))
// 0