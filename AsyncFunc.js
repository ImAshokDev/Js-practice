// normal Promise Func
// function callMe() {
//   return Promise.resolve("ashok");
// }
// console.log(callMe());

// normal async
// async function callMe() {
//   return "ashok";
// }
// console.log(callMe());

// async then
// async function callMe() {
//   return "ashok";
// }

// callMe().then((data) => {
//   console.log("result....", data);
// });

// normal fetch using promise

// function promiseFun() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//       return data.json();
//     })
//     .then((rawData) => {
//       console.log("rawData", rawData);
//     });
// }

// promiseFun();

// fetch using async await

async function asyncFunc() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const JsonData = await posts.json();

  console.log("json post data");
}

asyncFunc();
