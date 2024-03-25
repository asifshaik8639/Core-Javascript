Promise.resolve().then(() => {
    console.log("Promise microtask 1");
  });
  
  async function exampleAsyncFunction() {
    console.log("Async function (Before await)");
    await Promise.resolve();
    console.log("Async function (After await)");
  }
  
  exampleAsyncFunction();
  
  Promise.resolve().then(() => {
    console.log("Promise microtask 2");
  });
  
  console.log("Async function (After await) last");