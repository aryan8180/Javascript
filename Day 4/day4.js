// Day 4 Loops
// Activity 1 For Loop

// Task 1

let i;
for(i = 1;i<=10;i++){
    console.log(i);
}

// Task 2

for(i = 1;i<=10;i++){
    console.log(5*i);
}

// Activity 2 While Loop

// Task 3

let sum1 = 0;
i = 1;
while(i<=10){
    sum1 += i;
    i++;
}
console.log(`Sum of first 10 numbers is ${sum1}`);

// Task 4
i = 10;
while(i>=1){
    console.log(i);
    i--;
}

// Activity 3 Do...While Loop

// Task 5

i = 1;
do {
    console.log(i);
    i++;
} while (i<=5);

// Task 6
let product = 1;
let num = 4;
i = 1;
do{
    product = product * i;
    i++;
}while(i<=num);
console.log(product);

// Activity 4 Nested Loops

// Task 7
let n = 5;
for(i = 1;i<=n;i++){
    let line = "";
    for(let j = 1;j<=i;j++){
        line += "* ";
    }
    console.log(line);
}