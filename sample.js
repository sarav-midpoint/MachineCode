function countOfVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("countOfVowels => ", countOfVowels("adfienseijfseee"));

//reverse string
function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log("reverseString => ", reverseString("react"));

function reverseString2(word) {
  let reverse = [];
  for (let char of word) {
    reverse.unshift(char);
  }
  return reverse.join("");
}

console.log("reverseString2 => ", reverseString2("react"));

const reversed = [..."hello"].reduce((acc, char) => char + acc, "");

//check palindrome
function checkPalindrome(word) {
  const reverse = word.split("").reverse().join("");
  return word === reverse;
}

console.log("checkPalindrome => ", checkPalindrome("jerry"));

function checkPalindrome2(word) {
  const reverse = [];

  for (let char of word) {
    reverse.unshift(char);
  }
  return word === reverse.join("");
}

console.log("checkPalindrome2 => ", checkPalindrome2("madam"));

function checkPalindrome3(word) {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log("checkPalindrome3 => ", checkPalindrome3("jerry"));

//find largest number
function findLargestNum(nums) {
  let largeNum = 0;
  for (let char of nums) {
    if (char > largeNum) {
      largeNum = char;
    }
  }

  return largeNum;
}

console.log("findLargestNum => ", findLargestNum([2, 3, 6, 12, 2, 4, 17, 1]));

//find second largest
function secondLargest(nums) {
  let first = Math.max(...nums);
  let newArray = nums.filter((num) => num !== first);
  let second = Math.max(...newArray);

  return second;
}

console.log("secondLargest => ", secondLargest([2, 3, 6, 12, 2, 4, 17, 1]));

//count occurance
function countOccurance(num) {
  let result = {};
  for (let char of num) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  return result;
}

console.log("countOccurance => ", countOccurance("banana"));

function countSingleOccurance(word, char) {
  let result = {};
  result[char] = 0;
  for (let i of word) {
    if (i === char) {
      result[char]++;
    }
  }
  return result;
}

console.log("countSingleOccurance => ", countSingleOccurance("banana", "a"));

//sum all numbers
function sum(nums) {
  let sum = 0;
  for (const element of nums) {
    sum += element;
  }
  return sum;
}

console.log("sum => ", sum([2, 3, 4, 5, 6]));

function sum2(nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum2([2, 3, 4, 5, 6]));

//remove duplicate
function removeDuplicate(nums) {
  let result = [];
  for (const num of nums) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log("removeDuplicate => ", removeDuplicate([2, 3, 4, 3, 4, 2, 5, 6]));

//find missing number
function findMissingNumber(nums, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i of nums) {
    actualSum += i;
  }

  return expectedSum - actualSum;
}

console.log("findMissingNumber", findMissingNumber([2, 3, 1, 5, 4], 6));

//factorial
function factorial(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }

  return result;
}

console.log("factorial => ", factorial(5));

//check prime
function checkPrime(n) {
  if (n <= 1) return false;

  console.log("Math.sqrt(n) => ", Math.sqrt(n));

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(checkPrime(7));
console.log(checkPrime(10));

// function binarySearch(arr, target) {
//     let start = 0, end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) return mid;
//         if (arr[mid] < target) start = mid + 1;
//         else end = mid - 1;
//     }
//     return -1;
// }

// console.log(binarySearch([2, 4, 5, 7, 5], 10));

// function twoSum(nums, target) {
//     const map = {}; // Store number → index
//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         console.log("current => ", current);
//         const needed = target - current;
//         console.log("needed => ", needed);
//         console.log("map[needed] => ", map[needed]);

//         if (map[needed] !== undefined) {
//             return [map[needed], i]; // Found the pair
//         }

//         console.log("map 1=> ", map);

//         map[current] = i; // Store current value with index
//         console.log("map 2=> ", map);
//     }
// }

// // console.log(twoSum([2, 7, 11, 15], 9));
// twoSum([2, 7, 11, 15], 9)
