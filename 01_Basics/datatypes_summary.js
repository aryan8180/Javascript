// Primitive Data Type (These are call by value)
// 7 Types: String, Numbers, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemperature = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

const heros = ["shaktimaan","naagraj","doga"]
let myObj = {              // Object
    name:"aryan",
    age : 21
}

const myFunction = function(){
    console.log("Hello, World")
}

console.log(typeof outsideTemperature)
// Non Primitive Data Type (Reference Type Data Type)
// Array, Objects, Functions

// ******************************************************

// Memory are of two types, Stack and Heap
// Premitive Type uses Stack, yaha jo variable declare kiya hai uska ek copy milta hai
// Non Premitive Type uses Heap, yaha pe reference milta hai orignal value ka i.e. sab orignal value me hota hai

let myYouTubeName = "aryan"

let anotherName = myYouTubeName
anotherName = "Coffee aur code"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "aryansharmabkvv@gmail.com";
console.log(userTwo.email)
console.log(userOne.email)