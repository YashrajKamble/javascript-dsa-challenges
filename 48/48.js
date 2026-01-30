// QUESTION 48 — Find the Missing Letter in a Sequence

function findMissingLetter(str) {
    if (typeof str !== "string" || str.length < 2) {
        return undefined;
    }

    for (let i = 0; i < str.length - 1; i++) {
        let current = str.charCodeAt(i);
        let next = str.charCodeAt(i + 1);

        if (next - current > 1) {
            return String.fromCharCode(current + 1)
        }
    }
    return undefined;
}

console.log(findMissingLetter("abcef"))
// d