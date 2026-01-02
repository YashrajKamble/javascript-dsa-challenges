// QUESTION 19 — Find the Longest Word in a Sentence

function longestWord(sentence) {
    if (typeof sentence !== "string" || sentence.trim() === "") {
        return "";
    }

    let words = sentence.trim().split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i]

        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("I LOVE JAVASCRIPT"))
// JAVASCRIPT

console.log(longestWord("JS JS JS JS "))
// JS

console.log(longestWord("JS"))
// JS

console.log(longestWord(" "))
//  " "