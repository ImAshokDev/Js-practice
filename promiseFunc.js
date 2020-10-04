// promise chain
// var promise = new Promise(function (resolve, reject) {
//   resolve([1, 2, 3, 4]);
// });
// promise.then(function (data) {
//   console.log("promise function.....", data);
// });

// promise chain
var promise = new Promise(function (resolve, reject) {
  resolve([1, 2, 3, 4]);
});
promise
  .then(function (data) {
    console.log("first", data);

    return new Promise(function (resolve, reject) {
      resolve([5, 6]);
    });
  })
  .then(function (data1) {
    console.log("second", data1);
  });
