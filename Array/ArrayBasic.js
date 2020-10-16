// array length
// const a = [1, 2, 3, 4, 5];
// console.log("arra", a.length);

// array concat
// const a = [1, 2, 3, 4, 5];
// const b = ["a", "b", "c", "d"];

// const array3 = a.concat(b);
// console.log("concat....", array3);

// 3 array concat
const a = [1, 2, 3, 4, 5];
const b = ["a", "b", "c", "d"];
const c = [6, 7, 8];

const array3 = a.concat(b, c);
console.log("concat....", array3);

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
