// ---------------- FUNCTION AS OBJECT ----------------

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


// ---------------- CONSTRUCTOR FUNCTION ----------------

function createUser(username, score){
    this.username = username
    this.score = score
}


// ---------------- PROTOTYPE METHODS ----------------

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}


// ---------------- OBJECT INSTANCES ----------------

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()




/*
new keyword ke use hone par kya hota hai (Easy Hinglish):

1) Sabse pehle ek naya empty object create hota hai
   - new keyword automatic ek khali object bana deta hai

2) Us object ka prototype constructor ke prototype se link ho jata hai
   - Iska matlab object ko constructor.prototype ke methods mil jaate hain

3) Constructor function call hota hai
   - Jo arguments diye gaye hote hain wo yaha pass hote hain
   - this keyword us naye object ko point karta hai

4) Agar constructor function kuch return nahi karta
   - JavaScript automatically us naye object ko return kar deta hai

5) Final result:
   - Hume ek fully ready object milta hai
   - Jisme properties + prototype methods dono hote hain
*/












/*
===================== TODAY'S LEARNING NOTES =====================

TOPIC: Functions, Prototype & new Keyword in JavaScript

1) Function bhi object hota hai:
   - JavaScript me function ek special object hota hai
   - Isliye hum function ke sath properties add kar sakte hain
   - Example: multipleBy5.power = 2

2) Function ke properties:
   - multipleBy5(5) → function call
   - multipleBy5.power → custom property
   - multipleBy5.prototype → prototype object

3) Prototype kya hota hai?
   - Prototype ek object hota hai
   - Jisme methods store hote hain
   - Jo sab instances ke sath shared hote hain

4) Constructor Function:
   - createUser ek constructor function hai
   - Capital letter me likhna good practice hota hai
   - new keyword ke sath use hota hai

5) Prototype methods ka fayda:
   - increment() aur printMe() prototype me add kiye
   - Har object ke liye naya function nahi banta
   - Memory efficient hota hai

6) new keyword ke bina problem:
   - chai → new createUser() se bana (correct)
   - tea → bina new call hua (wrong)
   - Is case me `this` global object ko point karega

7) new keyword behind the scenes:
   - Ek naya empty object create hota hai
   - Prototype link hota hai
   - Constructor call hota hai
   - Agar return na ho to new object return hota hai

8) this keyword:
   - this current object ko refer karta hai
   - increment() me this.score ka matlab current user ka score

9) OOP concept clear:
   - Constructor → blueprint
   - Prototype → shared behavior
   - Instance → actual object (chai)

====================================================
*/
