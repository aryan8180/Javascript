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