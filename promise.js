let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
  );

  // defining my promise
  let myFunction = new Promise((resolve, reject) => {
    //   resolve('Am learning promise');
    reject('Am rejecting');
  });

  myFunction.then(
      res => console.log(res),
      err => console.log(err)
  );