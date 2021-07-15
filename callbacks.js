 // after ending of add() function 
 function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
    callback(); 
    } 
      
    // disp() function is called just 
    // after the ending of add() function  
    function disp(){ 
    console.log('This must be printed after addition'); 
    } 
      
    // Calling add() function 
    add(5,6,disp);  
    
    function load(p, params) {
        console.log(`${p} is calling ${params}`);
    }

    // own callback
    function loadScripts(a, src, callback) {
        console.log('calling');
        callback(a, src);
    }
 
loadScripts('chethan','./index.js', load);

// another callback1
function load() {
    console.log('I will execute after you!');
}

function loadCall(call) {
    console.log('I am back');
    call();
}

loadCall(load);

function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
    callback(); 
    } 
    
    // add() function is called with arguments given below 
    add(5,6,function disp(){ 
        console.log('This must be printed after addition.'); 
    });
// another callback2 sum defining 
function sum(callback, a, b) {
    console.log(a + b);
    callback();
}
// calling sum
sum(function disp() {
    console.log('anvavnabvan');
}, 3, 4);


// initialContext calling
loadInitScripts(() => {
    console.log('script load');
});

// initialContext defining
function loadInitScripts(callback) {
    console.log('call back');
    callback();
}


// callback return values
function foo(address, fn){
    fn(`${address} is my name`);
  }
  
  foo("chethan", function(value){
    console.log(value); // this is where you get the return value
  });
