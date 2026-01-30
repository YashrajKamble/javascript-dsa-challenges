// QUESTION 49 — Group Anagrams Together

function groupAnagrams(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let key = word.split("").sort().join("");

        if (!map[key]) {
            map[key] = []
        }

        map[key].push(word)
    }
    return Object.values(map)
}

console.log(groupAnagrams(["qwe", "weq", "ewq", "tyu", "yut"]))
// [ [ 'qwe', 'weq', 'ewq' ], [ 'tyu', 'yut' ] ]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]