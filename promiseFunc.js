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

// var promise = new Promise(function (resolve, reject) {
//   var num = Math.random();
//   if (num < 0.5) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });

// promise
//   .then(function (e) {
//     console.log("promise resolved....", e);
//   })
//   .catch((e) => {
//     console.log("Promise Rejected.....", e);
//   });

// promise with async code
// var promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     var num = Math.floor(Math.random() + 10);
//     resolve(num);
//   }, 3000);
// });

// promise
//   .then(function (e) {
//     console.log("promise resolved....", e);
//   })
//   .catch((e) => {
//     console.log("Promise Rejected.....", e);
//   });

// promise chain
// var promise = new Promise(function (resolve, reject) {
//   resolve(5);
// });
// promise
//   .then(function (data) {
//     console.log("result.....1", data);
//     return data * 2;
//   })
//   .then(function (data) {
//     console.log("result.....2", data);
//     return data * 2;
//   })
//   .then((data) => {
//     console.log("result.....3", data);
//   });

// promise resolve
// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingDetails = {
//       name: "Technial Meeting",
//       location: "Zoom",
//       time: "06.00 PM",
//     };

//     resolve(meetingDetails);
//   } else {
//     reject(new Error("rejectedddd"));
//   }
// });

// const addCalender = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calender = "meeting success";
//     resolve(calender);
//   });
// };

// meeting
//   .then(addCalender)
//   .then((res) => {
//     console.log("outtt   =", res);
//   })
//   .catch((err) => {
//     console.log("errorrr =  ", err);
//   });

// Promise.all

const a1 = Promise.resolve("ashok done 1");
const a2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 done");
  }, 2000);
});

Promise.all([a2, a1]).then((res) => {
  console.log(res);
});
