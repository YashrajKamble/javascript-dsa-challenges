// QUESTION 29 — Find the Maximum Difference Between Two Numbers in an Array ("The Best Time to Buy and Sell Stock (Single Transaction)")

function maxDifference(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return 0;
    }

    let buyPrice = arr[0];
    let maxProfit = 0;

    for (let i = 1; i < arr.length; i++) {

        let currentProfit = arr[i] - buyPrice;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }

        if (arr[i] < buyPrice) {
            buyPrice = arr[i];
        }
    }
    return maxProfit;
}

console.log(maxDifference([4, 6, 5]))
// 2