let arr = ["a", "b", "c", "d", "a", "b", "c", "d"]
let str = 'arunkumar'
let nums = [2, 3, 4, 4, 5, 6, 3, 7, 5, 8, 5, 7, 9]

//---------------------------------------------------------------
const removeDuplicate = (arr) => {
  const result = []
  for(let value of arr) {
    if(!result.includes(value)) {
      result.push(value)
    }
  }
  return result;
}

console.log(removeDuplicate(arr));

const reverse = arr.reduce((acc, curr) => {
  if(!acc.includes(curr)) acc.push(curr);
  return acc;
}, [])

const unique = [...new Set(arr)];

console.log("reverse => ", reverse);


//---------------------------------------------------------------

const findOccurance = (str) => {
  let map ={}
  for(let value of str){
    map[value] = (map[value] || 0) + 1;
  }
  return map;
}

console.log(" findOccurance =>", findOccurance(str));

//---------------------------------------------------------------

const reverseString = (str) => {
  const result = [];
  for(let value of str) {
    result.unshift(value)
  }
  
  return result.join("");
}
console.log(reverseString(str));

const reverseString2 = (str) => {
  return str.split("").reverse().join("")
}

console.log(reverseString2(str));

const reversed = [..."hello"].reduce((acc, char) => char + acc, "");

//---------------------------------------------------------------

function checkPalindrome(str) {
  let value = str.split("").reverse().join("");
  return value === str
}
console.log(checkPalindrome(str));


function checkPalindrome2(str) {
  let start = 0;
  let end = str.length - 1;

  while(start < end) {
    if(str[start] !== str[end]) {
      return false
    } else {
      start++;
      end--
    }
  }

  return true
}

console.log("checkPalindrome2 => ", checkPalindrome2(str));



let result = [];
function flatternArray(arr) {
  for(let value of arr){
    if(Array.isArray(value)) {
      flatternArray(value)
    } else {
      result.push(value)
    }
  }
}
flatternArray([1, [2, [3 , [4], 3], 4], 3])
console.log("result => ", result);


function flatternArray2(arr) {
  let result = [];

  for(let value of arr) {
    if(Array.isArray(value)) {
      result = result.concat(flatternArray2(value))
    } else {
      result.push(value)
    }
  }

  return result;
}

console.log("flatternArray2 => ", flatternArray2([1, [2, [3 , [4], 3], 4], 3]));

//---------------------------------------------------------------

//find max and second max

const findSecondMax = (nums) => {
  let max = -Infinity;
  let second = -Infinity;

  for(let value of nums) {
    if(value > max) {
      second = max
      max = value
    } else if (value > second && value !== max) {
      second = value;
    }
  }

  return `${second} - second largest, ${max} - first largest`
}

console.log("findSecondMax => ", findSecondMax(nums));

//=======================================


function reverseString (str) {
  let result = "";
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("rama"));

function removeDuplicate(arr) {
  let result = []
  for(let value of arr) {
    if(!result.includes(value)) {
      result.push(value)
    }
  }
  return result
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 5, 3, 4, 1, 3, 4, 5, 6, 3]));

function findOccurance(str) {
  const map = {};
  for(let value of str) {
    map[value] = (map[value] || 0) + 1;
  }
  return map;
}

console.log(findOccurance("harish"));

async function fetchData() {
  try {
    const res = await fetch("/api/data")
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err)
  }
}




for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// counter();
// counter();
// counter();

const inc = counter();
inc(); //1
inc(); //2
