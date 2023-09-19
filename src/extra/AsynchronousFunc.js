function AsyncFunc() {
  console.log("first");

  setTimeout(() => {
    console.log("second");
  }, 3000);
  console.log("Third");
}

AsyncFunc();
