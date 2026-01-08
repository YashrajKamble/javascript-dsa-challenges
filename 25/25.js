// QUESTION 25 — Check if a String Contains Only Digits

function isOnlyDigits(str) {
    if (typeof str !== "string" || str.length === 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char < "0" || char > "9") {
            return false;
        }
    }
    return true;
}

console.log(isOnlyDigits("2342342j"))
// false
console.log(isOnlyDigits("2342342"))
// true
console.log(isOnlyDigits("hh"))
// false
