//🧩 1. Problem 1: Sum of all numbers in an array

let numbers = [10, 20, 30, 50];
// let sum = 0
// numbers.forEach(number => sum = sum + number)

// console.log(sum);

//let sum = numbers.reduce((acc, num) => acc + num, 0);
//🧩 2. Problem 2: Find the largest number in an array

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (largest < numbers[i]) {
    largest = numbers[i];
  }
}

console.log("largest => ", largest);

//let largest = Math.max(...numbers);

//3. Reverse an array

let reverse = []

numbers.forEach(number => reverse.unshift(number))



for(let i = numbers.length - 1; i >= 0 ; i--) {
  reverse.push(numbers[i])
}
console.log("reverse => ", reverse);

//4. Problem 4: Count even and odd numbers
let num = [1, 2, 3, 4, 5, 6];
let Even = 0
let odd = 0

num.forEach((number) => {
  if(number % 2 === 0) {
    Even++
  } else {
    odd++
  }
})

console.log("even", Even);
console.log("odd", odd);


//find smallest number
let smallest = numbers[0]

numbers.forEach((number) => {
  if(number < smallest) {
    smallest = number
  }
})

//let smallest = Math.min(...numbers);
console.log("smallest => ", smallest);

//Calculate average of array elements (sum / total count)
let sum = 0
numbers.forEach(number => sum = sum + number)
console.log("sum => ", numbers.reduce((acc, curr) => curr + acc, 0));


let average = numbers.reduce((a,b)=>a+b,0) / numbers.length;
console.log("average => ", sum / numbers.length);


// // 🧩 Array Practice Problems (Optimized ES6 Version)

// const numbers = [10, 20, 30, 40, 50];
// const num = [1, 2, 3, 4, 5, 6];

// // 1️⃣ Sum of all numbers
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log("Sum =>", sum);

// // 2️⃣ Find the largest number
// const largest = Math.max(...numbers);
// console.log("Largest =>", largest);

// // 3️⃣ Reverse an array
// const reversed = [...numbers].reverse();
// console.log("Reversed =>", reversed);

// // 4️⃣ Count even and odd numbers
// const evenCount = num.filter(n => n % 2 === 0).length;
// const oddCount = num.filter(n => n % 2 !== 0).length;
// console.log("Even =>", evenCount);
// console.log("Odd =>", oddCount);

// // 5️⃣ Find the smallest number
// const smallest = Math.min(...numbers);
// console.log("Smallest =>", smallest);

// // 6️⃣ Calculate average of array elements
// const average = sum / numbers.length;
// console.log("Average =>", average);

// Problem 1: Remove Duplicates
const nums = [10, 20, 10, 30, 40, 20, 50];

// Method 1 – Using Set
const unique = [...new Set(nums)];
console.log("Unique =>", unique);


// Method 2 (Manually):
const uniqueManual = [];
nums.forEach((n) => {
  if (!uniqueManual.includes(n)) {
    uniqueManual.push(n);
  }
});
console.log("Unique Manual =>", uniqueManual);


// 🧩 Problem 2: Sorting Numbers
// const numbers = [50, 10, 40, 20, 30];
const asc = [...numbers].sort((a, b) => a - b);
const desc = [...numbers].sort((a, b) => b - a);

// Problem 3: Find 2nd Largest Number
const arr = [10, 40, 30, 20, 50];

const sorted = [...new Set(arr)].sort((a, b) => b - a);
const secondLargest = sorted[1];
console.log("Second Largest =>", secondLargest);


// Problem 4: Count Occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = {};

fruits.forEach(fruit => {
  count[fruit] = (count[fruit] || 0) + 1;
});

console.log("Count =>", count);

// Problem 5: Merge Two Arrays (Unique Values Only)
const a1 = [1, 2, 3];
const a2 = [3, 4, 5];
const merged = [...new Set([...a1, ...a2])];
console.log("Merged Unique =>", merged);
