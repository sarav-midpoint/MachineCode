let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
let k = 4


let windowSum = 0
let maxSum = 0;

for(let i = 0; i < k; i++) {
  windowSum += arr[i];
}

console.log("windowSum => ", windowSum);
maxSum = windowSum;

for (let i = k; i < arr.length; i++) {
  windowSum += arr[i] - arr[i - k];
  maxSum = Math.max(windowSum, maxSum);
}

console.log("maxSum => ", maxSum);

