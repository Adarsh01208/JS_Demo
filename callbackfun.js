
// A callback function in JavaScript is a function that is passed as an argument to another function, and is executed after its parent function has completed. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.

// Here's a simple example:

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

// In this example, greeting is a callback function. It's passed as an argument to processUserInput. When processUserInput is called, it prompts the user for their name, then it calls the callback function greeting, passing the user's name as an argument.


// Example of a callback function in JavaScript
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function () {
        var data = 'This is the fetched data';
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Processing data:', data);
}

fetchData(processData); // Output: Processing data: This is the fetched data

// Example of a callback function in JavaScript
function calculate(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}

function displayResult(result) {
    console.log('The result is:', result);
}

calculate(5, 3, displayResult); // Output: The result is: 8


//callback hell problem
//when a function is passed as an argument to another function then it become a callback function and this rpocess continue  and there are many call back function inside another callback function this grows the code horizontally  instead of vertically this mechanism is call back hell

//inversion of control
//callback function passed to another function and this wway we lose the control of the program
const cart = ["shoes", "pants", "shirt"]
api.createOrder(cart, function () {

    api.procedToPayment(function () {

        api.orderSummary(function () {

            api.updateWallet()
        })
    })
})

