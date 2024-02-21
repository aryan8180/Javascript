const myArray = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","Naagraj"]

const myArray2 = new Array(1,2,3,4)

console.log(myArray[4]);

// Array Methouds

// myArray.push(99)
// myArray.push(100)
// myArray.pop()
console.log(myArray);

//myArray.unshift(9)  // inserts the value to the first place and shifts the rest of the array
// console.log(myArray);
//myArray.shift()  // removes the value which is present at the first index of the array
// console.log(myArray);

// console.log(myArray.includes(2));
// console.log(myArray.indexOf(5));

const newArray = myArray.join()

console.log(myArray);
console.log(newArray);

// slice, splice
console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("B",myArray);