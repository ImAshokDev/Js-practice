function countDown(num) {
  console.log("before num = ", num);

  if (num === 5) {
    countDown(num - 1);
  }
  console.log("after num = ", num);
}

countDown(5);
