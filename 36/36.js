// QUESTION 36 — Check if a String Is a Pangram

function isPangram(str) {
    if (typeof str !== "string") {
        return false;
    }

    let set = new Set()

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (char >= "a" && char <= "z") {
            set.add(char)
        }
    }
    return set.size === 26;
}

console.log(isPangram("abcdefghijklmnopqrstuvwxy"))
// false

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))
// true

console.log(isPangram("abc"))
// false