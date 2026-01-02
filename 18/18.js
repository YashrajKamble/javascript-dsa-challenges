// QUESTION 18 — Move All Zeros to the End of an Array

function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i])
        }
    }
    for (let i = 0; i < zeroCount; i++) {
        result.push(0)
    }
    return result
}

console.log(moveZeros([0, 0, 5, 0, 9]))
// [5,9,0,0,0]

console.log(moveZeros([0, 0, 5, 1]))
// [5,1,0,0]

console.log(moveZeros([5]))
//[5]