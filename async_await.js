// Sure, async and await are extensions of promises in JavaScript that provide a simpler and cleaner way to work with asynchronous code.

// async: It's a keyword that you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

// await: It's used inside an async function to pause the execution of the function and wait for a Promise to resolve or reject, then resumes the execution and returns the resolved value.

// Here's a brief explanation of your code:


function getFruit(fruit) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Here's your ${fruit}`), 2000);
    });
}

async function fetchFruit() {
    const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    for (let fruit of fruits) {
        console.log(await getFruit(fruit));
    }
}

fetchFruit();

// In this fetchFruit function, it's marked as async which means it's an asynchronous function. Inside the function, it loops over an array of fruits. For each fruit, it calls the getFruit function and waits for it to complete before moving on to the next fruit. The await keyword is used to pause the execution of the function until the promise returned by getFruit(fruit) is resolved.

// The second example shows how to handle errors with async/await using try/catch blocks:
//another example
//When using async/await in JavaScript, you can handle errors using try/catch blocks. Here's an example:

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

// In this fetchData function, it tries to fetch data from a URL and parse it as JSON. If any of these operations fail (if they reject the promise), the function execution goes to the catch block and logs the error.

// Synchronous code
console.log('Start');
console.log('Middle');
console.log('End');

// Asynchronous code
console.log('Start');
setTimeout(function () {
    console.log('Middle');
}, 2000);
console.log('End');

// Example of async/await in JavaScript
function fetchData() {
    return new Promise(function (resolve, reject) {
        // Simulating an asynchronous operation
        setTimeout(function () {
            var data = 'This is the fetched data';
            resolve(data);
        }, 2000);
    });
}

async function processData() {
    try {
        var data = await fetchData();
        console.log('Processing data:', data);
    } catch (error) {
        console.log('Error:', error);
    }
}

processData(); // Output: Processing data: This is the fetched data



