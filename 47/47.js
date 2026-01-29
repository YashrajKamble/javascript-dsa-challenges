// QUESTION 47 — Find All Pairs in an Array That Sum to a Target

function findPairs(arr, tar) {
    if (!Array.isArray(arr)) {
        return [];
    }
    let seen = new Set();
    let pairs = new Set();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let compliment = tar - num;

        if (seen.has(compliment)) {
            let pair = [Math.min(num, compliment), Math.max(num, compliment)];
            let key = pair.join(",");

            if (!pairs.has(key)) {
                seen.add(key);
                result.push(pair);
            }
        }
        seen.add(num);
    }
    return result;
}

console.log(findPairs([1, 2, 3, 4, 5], 5)) //[2,3],[1,4]