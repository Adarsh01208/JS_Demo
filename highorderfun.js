
// A higher-order function in JavaScript is a function that can take one or more functions as arguments, or returns a function as its result. The concept is based on mathematical theory where functions can operate on and return other functions.

// Here are two primary ways a function can be a higher-order function:

//Takes a function as an argument: Many array methods like map(), filter(), reduce(), forEach() are higher-order functions because they take a function as an argument.
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());

//Returns a function as a result: A function that returns another function.
function greaterThan(n) {
    return m => m > n;
  }
  let greaterThan10 = greaterThan(10);
  console.log(greaterThan10(11)); // true

  
//In this example, greaterThan is a higher-order function that returns a function.


// Example of a higher-order function in JavaScript
function higherOrderFunction(callback) {
  // Perform some operations
  console.log("Executing higher-order function");
  
  // Call the callback function
  callback();
}

// Callback function
function callbackFunction() {
  console.log("Executing callback function");
}

// Call the higher-order function and pass the callback function as an argument
higherOrderFunction(callbackFunction);