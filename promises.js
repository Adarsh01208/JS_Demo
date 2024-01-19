// Sure, a Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It serves as a placeholder for the eventual results of the operation.

// Here's a brief explanation of your code:
let promise1 = new Promise(function (resolve, reject)
{
    let goodDeveloper=true;
    if(goodDeveloper)
    {
        setTimeout( ()=> {

            resolve("practice more and more")
        })
    }
    else
    {
        reject("kewal bakchodi karo")
    }
}); 
// In this code, a new Promise is created. The Promise constructor takes a function as an argument, which takes two parameters: resolve and reject, which are both functions.

// If the operation was successful, resolve is called with the resulting value.
// If the operation failed, reject is called with the error.
// In this case, if goodDeveloper is true, the promise is resolved with the string "practice more and more" after a delay (caused by setTimeout). If goodDeveloper is false, the promise is immediately rejected with the string "kewal bakchodi karo".

// The console.log(promise) will log the Promise object, which will show its state and value.

// The commented out then and catch methods are used to handle the resolved or rejected promise:

console.log(promise1)
promise1.then((res)=> {
    console.log(res)
}).catch(console.error())

// then is called when the Promise is resolved. The resolved value is passed to the function inside then.
// catch is called when the Promise is rejected. The error is passed to the function inside catch.


// Example of promises in JavaScript
function fetchData() {
    return new Promise(function (resolve, reject) {
        // Simulating an asynchronous operation
        setTimeout(function () {
            var data = 'This is the fetched data';
            resolve(data);
        }, 2000);
    });
}

function processData(data) {
    console.log('Processing data:', data);
}

fetchData()
    .then(processData) // Output: Processing data: This is the fetched data
    .catch(function (error) {
        console.log('Error:', error);
    });


    // Creating a new Promise
let promise = new Promise((resolve, reject) => {
    let condition = true; // You can set this to false to see the promise get rejected

    setTimeout(() => {
        if (condition) {
            resolve('Promise is resolved!');
        } else {
            reject('Promise is rejected!');
        }
    }, 1000); // The promise will be resolved or rejected after 1 second
});

// Using the Promise
promise
    .then(result => {
        console.log(result); // This will run if the promise is resolved
    })
    .catch(error => {
        console.log(error); // This will run if the promise is rejected
    });