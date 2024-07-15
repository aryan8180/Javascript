// Day 3 Control Structures
// Activity 1 If-Else Statements

// Task 1

let num1 = 7;
if(num1 > 0){
    console.log("Positive");
}else if(num1 < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}

// Task 2

let num2 = 21;
if(num2 >= 18){
    console.log('You are eligible to vote');
}else{
    console.log('You are not eligible to vote');
}

// Activity 2 Nested If-Else Statements
let num3 = 10;
let num4 = 20;
let num5 = 30;
if(num3 > num4){
    if(num3 > num5){
        console.log(`${num3} is the greatest number among the three`)
    }
}else if(num4 > num3){
    if(num4 > num5){
        console.log(`${num4} is greatest number among the three`)
    }
}else if(num5 > num3){
    if(num5 > num4){
        console.log(`${num5} is greatetest number among the three`);
    }
}

// Activity 3 Switch Case
