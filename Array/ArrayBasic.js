// array length
// const a = [1, 2, 3, 4, 5];
// console.log("arra", a.length);

// array concat
// const a = [1, 2, 3, 4, 5];
// const b = ["a", "b", "c", "d"];

// const array3 = a.concat(b);
// console.log("concat....", array3);

// 3 array concat
// const a = [1, 2, 3, 4, 5];
// const b = ["a", "b", "c", "d"];
// const c = [6, 7, 8];

// const array3 = a.concat(b, c);
// console.log("concat....", array3);

// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
// num1[0].push(4);

// console.log(numbers);

/* <=== FILL ===> */

// const array1 = [1, 2, 3, 4, 5];

// const testArr=array1.fill(0)
// console.log('METHOD=1 fill()', array1.fill(0,1,4))
// console.log('METHOD=2 fill()', array1.fill(0,1))
// console.log('METHOD=3 fill()', array1.fill(0))

/* <=== FILTER ===> */
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const testArr=words.filter(el=> el.length>5)
// console.log('METHOD=3 filter()', testArr)

/* <=== FIND ===> */
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const testArr = words.find(el=>el.length<8)
// console.log('METHOD=3 find()', testArr)
// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 3},
//     {name: 'cherries', quantity: 5}
//   ];

//   const testArr = inventory.find(({name})=>{
//    const list = name==="bananas"
//     return list
//   })
// console.log('METHOD=3 find()', testArr)

/* <=== FLAT ===> */
// const a1 = [1, 2, 3, [10, 11]];
// console.log("METHOD flat()", a1.flat(2));

// const a2 = [1, 2, 3, [[10, 11]]];

// console.log("METHOD flat()", a2.flat(1));

/* <=== FLATMAP ===> */
const a1 = [1, 2, 3];
const a2 = a1.flatMap((x) => [x, x * 2]);
const a3 = a1.reduce((acc, val) => {
  console.log(acc, val)
 return acc.concat([val, val * 2])
}, []);

console.log("METHOD flatMap()", a2, a3);
