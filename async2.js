function what(a) {
    let b = 5;
    return a + b;
}

async function sum(c) {
    const s  = await what(7);
    console.log(s + c);
}

sum(9);

// other example 1
async function hello() {
    return 'Hello Alligator!';
  }
  
  const b = hello();
  
  b.then(x => console.log(x)); // Hello Alligator!

// example 2

function yayOrNay() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Lucky!!') : reject('Nope 😠');
    });
  }
  
  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }
  
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Lucky!!