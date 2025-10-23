let numebrs = [1, 2, 3, 4, 6];

const n = numebrs[numebrs.length - 1];

console.log("n", n);

let total = (n * (n + 1)) / 2;
console.log("total => ", total);

let arrValue = numebrs.reduce((acc, curr) => acc + curr);

let result = total - arrValue;

console.log("result => ", result);

//another way
let min = Math.min(...numebrs);
let max = Math.max(...numebrs);

let sumTotal = 0;

for (let i = min; i <= max; i++) {
  sumTotal += i;
}

console.log("sum Total => ", sumTotal);

console.log("reesuts => ", sumTotal - arrValue);

//Find frequency

let freqArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];

let returs = freqArray.reduce((acc, curr) => {
  // acc[curr] = acc[curr] ? acc[curr] + 1 : acc[curr] = 1;
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log("returs => ", returs);

const numbers = [1, 2, 4, 7, 6, 3];

function findIndex(nums, target) {
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    if (target === numbers[i]) {
      result = i;
    }
  }
  return result;
}

console.log("findIndex => ", findIndex(numbers, 7));

//second smallest

let asc = [...new Set(numebrs)].sort((a, b) => a - b);

console.log(asc[1]);

function findSecondSmallest(numbers) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      secondSmallest = smallest;
      smallest = numebrs[i];
    } else if (numbers[i] < secondSmallest) {
      secondSmallest = numbers[i];
    }
  }

  return secondSmallest;
}

console.log("findSecondSmallest(numbers) => ", findSecondSmallest(numbers));