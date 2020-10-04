// promise chain
// var promise = new Promise(function (resolve, reject) {
//   resolve([1, 2, 3, 4]);
// });
// promise.then(function (data) {
//   console.log("promise function.....", data);
// });

// promise chain
// var promise = new Promise(function (resolve, reject) {
//   resolve([1, 2, 3, 4]);
// });
// promise
//   .then(function (data) {
//     console.log("first", data);

//     return new Promise(function (resolve, reject) {
//       resolve([5, 6]);
//     });
//   })
//   .then(function (data1) {
//     console.log("second", data1);
//   });

// promise error handling
// var promise = new Promise(function (resolve, reject) {
//   reject("ERROR.... Promise Rejected...");
// });

// promise
//   .then(function (e) {
//     console.log("promise resolved....", e);
//   })
//   .catch((e) => {
//     console.log("Rejected.....", e);
//   });

var promise = new Promise(function (resolve, reject) {
  var num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

promise
  .then(function (e) {
    console.log("promise resolved....", e);
  })
  .catch((e) => {
    console.log("Promise Rejected.....", e);
  });
