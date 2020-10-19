// function countDown(num) {
//   console.log("before num = ", num);

//   if (num === 5) {
//     countDown(num - 1);
//   }
//   console.log("after num = ", num);
// }

// countDown(5);

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);
