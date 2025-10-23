// let numbers = [1, 2, 3, 4, 6, 8, 9];
// let target = 10;

//On2
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target) {
//       console.log(numbers[i], numbers[j]);
//     }
//   }
// }

//(On)
// let left = 0;
// let right = numbers.length - 1;

// while (left < right) {
//   let sum = numbers[left] + numbers[right];

//   if (sum === target) {
//     console.log("Found:", numbers[left], numbers[right]);
//     break;
//   }
//   else if (sum < target) {
//     left++;
//   }
//   else {
//     right--;
//   }
// }

let arr = [2, 5, 8, 12, 30];
let target = 17;

let left = 0;
let right = arr.length - 1;

while (left < right) {
  let sum = arr[left] + arr[right];
  console.log("sum", sum);

  if (sum === target) {
    console.log("value found => ", arr[left], " + ", arr[right]);
    break;
  }
  if (sum < target) {
    left++;
  } else {
    right--;
  }
}

let reverseArr = []

for(let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
  
  reverseArr.push(arr[i])
}
console.log("reverse => ", reverseArr);


let start = 0
let end = arr.length - 1

while(start < end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  start++;
  end--;
}

console.log("In place reversed => ", arr);


// 🏋️‍♂️ Your Tasks (Try Now Boss):
// From [1, 4, 2, 10, 2, 3, 1, 0, 20] find the maximum sum of 4 consecutive elements.
// From [2, 3, 4, 1, 5] find the maximum sum of 2 consecutive elements.


