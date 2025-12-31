// QUESTION 14 — Find the Frequency of Each Character in a String

function charFrequency(str) {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (char === " ") continue;

        if (freq[char] !== undefined) {
            freq[char] += 1;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}

console.log(charFrequency("hello"))
// {h:1,e:1,l:2,o;1}