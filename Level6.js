let arr = [3, 7, 3, 4, 5, 6, 10, 14];
let target = 14;

let start = 0;
let windowSum = 0;
let minLen = Infinity;

for (let end = 0; end < arr.length; end++) {
  windowSum += arr[end];

  while (windowSum >= target) {
    minLen = Math.min(minLen, end - start + 1);
    windowSum -= arr[start];
    start++;
  }
}

console.log(minLen === Infinity ? 0 : minLen);


// Array: [2, 3, 1, 2, 4, 3]
//         ↑
//       start,end = 0
// WindowSum = 2 < 7

// → Slide right →
// [2, 3]         (sum=5)
// [2, 3, 1]      (sum=6)
// [2, 3, 1, 2]   (sum=8 ✅)
//    ↑ shrink left (remove 2)
//    [3,1,2] (sum=6 ❌)

// → Add next (4)
// [3,1,2,4] (sum=10 ✅)
//    shrink 3 → [1,2,4] (sum=7 ✅)
//    shrink 1 → [2,4] (sum=6 ❌)

// → Add next (3)
// [2,4,3] (sum=9 ✅)
//    shrink 2 → [4,3] (sum=7 ✅) ✅✅
//    shrink 4 → [3] (sum=3 ❌)
