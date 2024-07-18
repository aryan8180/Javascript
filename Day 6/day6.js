// Day 6 Arrays

// Activity 1 Array Creation and Access

// Task 1
let arr1 = [1,2,3,4,5];
console.log(arr1);

// Task 2
let first_element = arr1[0];
let last_element = arr1[arr1.length-1];
console.log(`First element of the array is: ${first_element}`);
console.log(`Last element of the array is: ${last_element}`);

// Activity 2 Array Methouds (Basic)

// Task 3

arr1.push(6);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(10);
console.log(arr1);

// Activity 3 Array Methouds (Intermediate)

// Task 7

const numbers = [1,2,3,4,5];

const double = numbers.map(num => num*2)
console.log(double);

// Task 8

const odds = numbers.filter(num => num%2 !== 0)
console.log(odds);

// Task 9

const sum = numbers.reduce((presum,postnum) => presum + postnum , 0);
console.log(sum);

// Task 10

for(let i=0;i<5;i++){
    console.log(numbers[i]);
}

// Task 11

numbers.forEach(num =>{
    console.log(num);
})

// Activity 5 Multi-dimensional Array

// Task 12

const twoD = [[1,2],[3,4],[5,6]];
console.log(twoD);

// Task 13

console.log(twoD[0][0])
console.log(twoD[0][1])
console.log(twoD[1][0])
console.log(twoD[1][1])