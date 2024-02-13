// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// The reason is that an equality check == and comparisions > < >= <= work differently.
// Companrisons convert null to a number, treating it as 0
// That's why (3) null >= 0 is true as (1) null > 0 is false.

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// This will always give the result as false

// === => this is strict check, checks the value as well as data type

console.log("2"==2) //This will return true
console.log("2"===2) // This will return false, as while checking data type, one is string and another is number.



