// Day 8: ES6 + Features

// `let` and `const` to declare the variables. Earlier, we use to use `var`.
// Difference between these methoud is of scope
/* 
In ES5 only functions can create scope. Inside function is private and outside function is global/private.

Template Literals `${...}`
*/

// let productName = 'Laptop';
// let quantity = 2;
// let description = `I have ordered ${quantity} ${productName}`;
// console.log(description);

/*
Arrow Function () => concept alternative to a traditional function expression

const sum = (x,y) => x+y;
console.log(sum(10,20));

If there are no arguements we can write sum = () => x+y;
*/

/*
Mutable and Immutable
If the value can be changed, it's called Mutable Primitive Types
If the value cannot be changed, it's called Immutable Reference Type (Array and Object)
*/

/* 
Spread Operator (...) Array, Objects and Functions
const users = ['user1','user2','user3']
console.log(users); // Displays in array
console.log(...users);  // Displays like individual elements
*/

/* 
Rest Parameter(...)
Allows a function to accept indefinite number of arguements as an array
*/


// Activity 1: Template Literals

// Task 1

let name = "Aryan";
let age = 21;

console.log(`My name is ${name}, I am ${age} years old.`);

// Task 2

let description = `My name
${name},
I am ${age}
years old.`;
console.log(description);

// Activity 3 Spread and Reset Operators

// Task 5

const even = [2,4,6,8,10];
const odd = [1,3,5,7,9];
const combinedNumbers = [...even,...odd];
console.log(combinedNumbers);

// Task 6

function sumAll(...nums) {
    let total = 0;
    for(const num of nums){
        total+=num;
    }
    return total;
}

console.log(sumAll(5,6));
console.log(sumAll(5,6,7,8));

