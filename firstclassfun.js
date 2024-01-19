
// First-class functions in JavaScript means that functions are treated as values. They can be assigned to variables, stored in data structures, passed as arguments to other functions, and returned from other functions.

// Here's an example of each:

// Assigned to a variable: A function can be assigned to a variable.

const greet = function() {
    console.log('Hello, world!');
  };
  greet(); // Hello, world!

//Stored in a data structure: Functions can be stored in objects or arrays.

const obj = {
    sayHello: function() { console.log('Hello!'); }
  };
  obj.sayHello(); // Hello!
  
  const arr = [function() { console.log('Hello from array!'); }];
  arr[0](); // Hello from array!

//Passed as an argument to another function: Functions can be passed as arguments to other functions.

function greetSomeone(greeting, name) {
    greeting(name);
  }
  greetSomeone(function(name) { console.log(`Hello, ${name}!`); }, 'Alice'); // Hello, Alice!

//Returned from another function: Functions can be returned from other functions.

function createGreeting(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  const greetAlice = createGreeting('Alice');
  greetAlice(); // Hello, Alice!

//Your selected code const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']; is an array of strings, not a demonstration of first-class functions.

