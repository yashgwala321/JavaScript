// Array 

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array Methods -:

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(0) // => Start me element add karta hai
myArr.shift() // => First element remove karta hai

//console.log(myArr.includes(6));
//console.log(myArr.indexOf(3));

 // const newArr = myArr.join() //=> ye array ko string me kar deta hai 

// console.log(myArr);
// console.log( newArr);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// slice => Array ka ek part copy karta hai, original array change nahi hota.
// splice => Array me add, remove ya replace karta hai, original array change hota hai.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 4)
console.log(myn2);
console.log("C ", myArr);