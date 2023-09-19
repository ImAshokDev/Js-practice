var a = ["a", "b", "c", "d", "e"];

// method 1

// function oneFunc(data) {
//   console.log("value.....=", data);
// }
// a.forEach((e) => oneFunc(e));

// method 2
a.forEach(function (e) {
  console.log("value.....", e);
});
