async function f() {
    return 1;
  }
  
  f().then(console.log); // 1

  // callback return values
async function foo(address, fn){
    fn(`${address} is my name`);
  }
  
  foo("chethan", function(value){
    console.log(value); // this is where you get the return value
  });

  // ---------------await
  async function f1() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  f1();