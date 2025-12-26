 //  Primitive:-

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100     //Number
const scoreValue = 100.3    //Number

const isLoggedIn = false    //Boolearn
const outsideTemp = null    //null
let userEmail;  //undefined

const id = Symbol('123')    // symbol
const anotherId = Symbol('123')     //symbol

console.log(id === anotherId);      //false 

// const bigNumber = 3456543576654356754n


// Non primitive:-

// Reference (Non primitive) 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/



// https://262.ecma-international.org/5.1/#sec-11.4.3



//--------------------------------------------------------------------------------------------------------------------------------


// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudhartdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

//------------------------------------------------------------------------------------------------------------------------------------

 