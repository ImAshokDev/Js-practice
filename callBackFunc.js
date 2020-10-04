function callBackFunc() {
  setTimeout(() => {
    console.log("Callback function....");
  }, 3000);
}

function higherOrderFunc(callbackFun) {
  // parameer
  console.log("First line...");
  callbackFun();
  console.log("Last Line....");
}

higherOrderFunc(callBackFunc); // argument
