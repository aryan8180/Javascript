// Day 5 Functions

// Activity 1 Function Declaration

// Task 1

function evenOdd(n) {
    if(n%2==0){
        return 'Even';
    }else{
        return 'Odd';
    }
}

console.log(evenOdd(9));

// Task 2

function square(n) {
    return n*n;
}

console.log(square(5));

// Activity 2 Function Expression

// Task 3

function maxoftwo(a,b){
    if(a>b){
        return a;
    }else if(b>a){
        return b;
    }else{
        return 'both equal';
    }
}

console.log(maxoftwo(5,6));
console.log(maxoftwo(7,4));
console.log(maxoftwo(5,5));

// Task 4

function concat(s1,s2){
    return s1 + s2;
}
let s1 = 'Good Morning ';
let s2 = 'Aryan';
console.log(concat(s1,s2));

// Activity 3 Arrow Function

// Task 5

const sum = (a,b) => {
    return a+b;
};
console.log(sum(10,7));

// Task 6

const check = (s,c) => {
    if(s.includes(c)){
        return true;
    }else{
        return false;
    }
}
console.log(check('Aryan','a'));
console.log(check('Aryan','z'));

// Activity 4 Function Parameters and Default Values

// Task 7

function product(a,b){
    return a*b;
}
let a = 9;
console.log(product(a,7));

// Task 8
function greeting(s,age){
    return `Hey ${s}, you are ${age} year old.`
}
let s = 'Aryan';
console.log(greeting(s,21));
s = 'Happy';
console.log(greeting(s,16));