let l1 = [2,4,3]
let l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    let newl1 = parseInt(l1.reverse().join(''))
    let newl2 = parseInt(l2.reverse().join(''))
    let result = (newl1 + newl2)
    return result.toString().split('').reverse().join('')
};


console.log(addTwoNumbers(l1, l2));
