let nums = [1, 3, 4, 5, 7, 4, 6]

let odd = nums.filter((num) => num % 2 !== 0)

console.log("odd => ", odd);

let multi = nums.reduce((acc, curr) => acc * curr);
console.log("multi => ", multi);

let nums2 = [10, 5, 15, 20];
let evenArray = nums2.filter((num) => num % 2 == 0).reduce((acc, curr) => acc + curr);

console.log("evenArray => ", evenArray);


const fruits = ["apple", "banana", "apple", "orange", "banana"];

let occurance = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
},{});
console.log("occurance => ", occurance);


let maxCount = 0
let mostFrequecy = []

for(let fruit in occurance) {
  if (occurance[fruit] > maxCount) {
    maxCount = occurance[fruit]
    mostFrequecy = [fruit]
  } else if(occurance[fruit] === maxCount){
    mostFrequecy.push(fruit)
  }
}

console.log("most frquency => ", mostFrequecy);



let arr = [1,2,3,4,5];
let target = 6;

let left = 0;
let right = arr.length - 1;
let count = 0;

while(left < right){

    let sum = arr[left] + arr[right];

    if(sum === target){
        count++;
        left++;
        right--;
    }
    else if(sum < target){
        left++;
    }
    else{
        right--;
    }
}

console.log(count);
