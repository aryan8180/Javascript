// Day 2 Operators
// Activity 1 Arithmetic Operations

// Task 1,2,3,4,5
let num1 = 4;
let num2 = 6;
console.log(num1 + num2); // Add two numbers
console.log(num2 - num1); // Subtract two numbers
console.log(num2 * num1); // Multiply two numbers
console.log(num2 / num1); // Divide two numbers
console.log(num2 % num1); // Remainder

// Activity 2 Assignment Operators

// Task 6
let num3 = 5;
num3 += 2;
console.log(num3);

// Task 7
let num4 = 16;
num4 -= 6;
console.log(num4);

// Activity 3 Comparison Operators

// Task 8
let num5 = 18;
let num6 = 49;

let comp1 = num5 > num6;
let comp2 = num5 < num6;

console.log(comp1);
console.log(comp2);

// Task 9
let num7 = 7;
let num8 = 8;

let comp3 = num7 >= num8;
let comp4 = num8 <= num7;

console.log(comp3);
console.log(comp4);

// Task 19
let num9 = 7;
let num10 = '7';

console.log(num9==num10);
console.log(num9===num10);

// Activity 4 Logical Operators

// Task 11, 12, 13

let num11 = 5;
let num12 = 7;

let andOpr = num11 && num12;
console.log(andOpr);

let orOpr = num11 || num12;
console.log(orOpr);

let notOpr = num11 != num12;
console.log(notOpr);

// Activity 5 Ternary Operator

// Task 14

let num13 = 10;
let evenorodd = num13%2==0 ? "Even" : "Odd";
console.log(evenorodd);

// Feature Request
// 1 Arithmetic Operations Script
let num14 = 14;
let num15 = 16;

console.log(num14 + num15)
console.log(num14 - num15)
console.log(num14 * num15)
console.log(num14 / num15)
console.log(num14 % num15)

// 2 Comparison and Logical Operators Script
let num16 = 77;
let num17 = 17;

console.log(num16 > num17);
console.log(num16 < num17);

let num18 = 3;
let num19 = '3';
console.log(num18==num19);
console.log(num18===num19);

console.log(num16 && num17);
console.log(num16 || num17);
console.log(num16 != num17);

// 3 Ternary Operator Script
let num20 = 20;

let positiveornegative = num20 > 0 ? "Positive" : "Negative";
console.log(positiveornegative);