let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    console.log(value); // John, then 30
  }

  // arrow functions
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        console.log(this.title + ': ' + student)
      });
    }
  };
  
  group.showList();

  // arrow functions has no arg
  function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2 seconds

  // without arrow functions
  function defer1(f, ms) {
    return function(...args) {
      let ctx = this;
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    };
  }
  let sayHiDeferred1 = defer1(sayHi, 2000);
sayHiDeferred1("chethan"); // Hello, John after 2 seconds