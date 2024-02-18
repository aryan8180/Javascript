const name = "Aryan"
const repoCount = 50

// console.log(name + repoCount + " value");
console.log(`Hello, my name is ${name} and my repository count is ${repoCount}`);

const gameName = new String("Aryan FC")
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString)

const newStr1 = "Aryan   says that the   Aryan is cooking"
console.log(newStr1);
console.log(newStr1.trim());

const newStr2 = "Aryan"
console.log(newStr2.replace("y","i"));