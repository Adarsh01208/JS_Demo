
//example of hoisting in javascript
console.log(message); // Output: undefined
var message = 'Hello, hosting!';
console.log(message); // Output: Hello, hosting!

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




// Example of map method
const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example of filter method

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // Output: ['banana', 'orange']

// Example of reduce method
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example of sort method
const names = ['John', 'Alice', 'Bob', 'David', 'Catherine'];
const sortedNames = names.sort();
console.log(sortedNames); // Output: ['Alice', 'Bob', 'Catherine', 'David', 'John']

// Example of forEach method
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8
// 10
 
// Example of some method
const numbers3 = [1, 2, 3, 4, 5];
const hasNegativeNumbers = numbers3.some(num => num < 0);
console.log(hasNegativeNumbers); // Output: false

// Example of using the call method
const person1 = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const person2 = {
    name: 'Alice',
    age: 25
};

person1.greet.call(person2); // Output: Hello, my name is Alice and I am 25 years old.

// Example of using the apply method
const numberss = [1, 2, 3, 4, 5];

const maxNumber = Math.max.apply(null, numberss);
console.log(maxNumber); // Output: 5

// Example of using the bind method
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

const greetFunction = person.greet.bind(person);
greetFunction(); // Output: Hello, my name is John and I am 30 years old.

