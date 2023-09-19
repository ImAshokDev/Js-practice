function oneFunc(a, bFunc) {
  return "Welcome callback with anonymous" + " " + bFunc(a);
}

const result = oneFunc("first", function (e) {
  return e.toUpperCase();
});

console.log("result.....", result);
