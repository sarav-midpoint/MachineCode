// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */

let nums = [1,12,-5,-6,50,3]; 
let k = 4;

var findMaxAverage = function(nums, k) {

    let windowSum = 0;
    let maxAvg = 0;

    for(let i = 0; i < k; i++) {
        windowSum += nums[i]
    }

    maxAvg = windowSum / k;

    for(let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]
        maxAvg = Math.max(maxAvg, windowSum / k)
    }

    return maxAvg;
};

findMaxAverage(nums, k)
console.log("fine max average => ", findMaxAverage(nums, k));
