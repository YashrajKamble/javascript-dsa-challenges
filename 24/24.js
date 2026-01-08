// QUESTION 24 — Capitalize the First Letter of Each Word

function capitalizeWords(str) {
    if (typeof str !== "string" || str.trim() === "") {
        return "";
    }
    let words = str.trim().split(" ")
    let result = []

    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (word === "") continue;
        let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase()
        result.push(capitalized)
    }
    return result.join(" ")
}

console.log(capitalizeWords("hello world"))
// Hello World

console.log(capitalizeWords("front end react js developer"))
// Front End React Js Developer

console.log(capitalizeWords(""))
// ""