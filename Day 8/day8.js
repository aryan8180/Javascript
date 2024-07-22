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
If the value can be changed, it's called Mutable
If the value cannot be changed, it's called Immutable
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