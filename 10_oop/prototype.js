// ================= STRING (commented example) =================

// let myName = "Yash    "
// let myLast = "Gwala      "
// console.log(myName.length);
// console.log(myName.trueLength);


// ================= ARRAY & OBJECT =================

let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power id ${this.spiderman}`);
    }    
}


// ================= PROTOTYPE INJECTION =================

// Object ke prototype me method add kiya
Object.prototype.yash = function(){
    console.log("yash is present in all object")
}

// Sirf Array ke prototype me method add kiya
Array.prototype.heyYash = function(){
    console.log(`Yash says hello`);
}


// heroPower.getSpiderPower()
// heroPower.yash()
// myheros.yash()
myheros.heyYash()
// heroPower.heyYash()        // error (kyunki heyYash sirf array ke liye hai)


// ================= INHERITANCE =================

const User = {
    name:"Harshi",
    email: "harshi@gmail.com"
}

const Teachar = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

// Teachar → User se properties inherit karega
Teachar.__proto__ = User


// ================= MODERN SYNTAX =================

// TeachingSupport → Teachar se properties access karega
const anw = Object.setPrototypeOf(TeachingSupport,Teachar)
console.log(anw)


// ================= STRING PROTOTYPE =================

const anotherUsername = "Pankaj      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Sonu".trueLength()
"Harshi".trueLength()





/*
===================== TODAY'S LEARNING NOTES =====================

TOPIC: Prototype, Inheritance & JavaScript Internals (Beginner Level)

1) JavaScript me sab kuch object hota hai:
   - Array bhi object hai
   - Function bhi object hai
   - String bhi object ki tarah behave karta hai

2) Prototype kya hota hai?
   - Prototype ek extra storage jaisa hota hai
   - Jisme hum common methods add kar sakte hain
   - Jo automatically sab related objects ko mil jate hain

3) Object.prototype:
   - Object.prototype sabse top level hota hai
   - Jo bhi method yaha add karoge
   - Wo ALL objects ko milta hai
   - Example: yash() method

4) Array.prototype:
   - Sirf arrays ke liye hota hai
   - Array-specific methods yaha add karte hain
   - Example: heyYash()
   - Object isse access nahi kar sakta

5) Prototype chain:
   - Array → Object → null
   - Isliye array object ke methods use kar sakta hai
   - Par object array ke methods use nahi kar sakta

6) Inheritance kya hota hai?
   - Ek object dusre object ki properties use kare
   - Code reuse hota hai
   - Duplicate code likhne ki zarurat nahi hoti

7) __proto__:
   - Old syntax hai inheritance ke liye
   - Ek object ko dusre se link karta hai
   - Example: Teachar.__proto__ = User

8) Object.setPrototypeOf():
   - Modern aur recommended syntax
   - Same kaam karta hai jo __proto__ karta hai
   - Readable aur safe hota hai

9) String.prototype:
   - String ke common methods yaha hote hain
   - Hum apna custom method bhi add kar sakte hain
   - Example: trueLength()

10) trueLength() method:
    - Extra spaces remove karta hai (trim)
    - Actual length batata hai
    - Kisi bhi string par kaam karega

11) Key Concept:
    - Prototype = power of JavaScript
    - Inheritance = code reuse
    - Prototype chain = method lookup system

12) Real-life example:
    - Parent → Child inheritance
    - Parent ke features child ko mil jate hain
    - Child apne extra features bhi add kar sakta hai

====================================================
*/
