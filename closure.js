// A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It has access to variables from these three scopes even after the outer function has finished execution.

// In your provided code:

function outerFunction() {
    var outerVariable = 'Hello';

    function innerFunction() {
        var innerVariable = 'World';
        console.log(outerVariable + ' ' + innerVariable);
    }

    return innerFunction;
}

var closure = outerFunction();
closure(); // Output: Hello World

// outerFunction is the outer function that creates a local variable outerVariable and a function innerFunction. innerFunction is a closure that is defined inside outerFunction and has access to outerFunction's scope, so it can access outerVariable.

// When outerFunction is invoked, it returns innerFunction, which is assigned to the variable closure. When we invoke closure(), even though outerFunction has finished execution, closure still has access to outerVariable in outerFunction's scope, which is why it can log Hello World. This is a demonstration of a closure in JavaScript.


