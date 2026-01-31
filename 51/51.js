// QUESTION 51 — Check if an Array Contains Duplicates

function containsDuplicate(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return true;
        }
        seen.add(arr[i])
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));      // false
console.log(containsDuplicate([1, 2, 3, 1]));      // true
console.log(containsDuplicate([]));              // false
console.log(containsDuplicate(["a", "b", "c", "a"])); // true