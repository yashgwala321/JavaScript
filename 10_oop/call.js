// ===================== USERNAME SETTER FUNCTION =====================

function SetUsername (username){
    this.username = username
}


// ===================== MAIN USER CREATOR FUNCTION =====================

function createUser (username,email,password){

    // SetUsername function ko yaha call kiya
    // call() se hum this manually pass kar rahe hain
    SetUsername.call(this,username)

    this.email = email
    this.password = password
}


// ===================== OBJECT CREATION =====================

const newUser = new createUser("yash","yash@gmail","321")
console.log(newUser);






/*
===================== TODAY'S LEARNING NOTES =====================

TOPIC: call(), this & Function Reuse (Beginner Friendly)

1) Problem kya thi?
   - createUser function me username set karna tha
   - Lekin username ka logic already SetUsername function me likha hua tha
   - Same code dubara likhna nahi chahte the

2) Solution kya use ki?
   - Function reuse
   - call() method ka use

3) SetUsername function kya karta hai?
   - Sirf username ko this.username me set karta hai
   - Ye ek helper function jaisa kaam karta hai

4) call() method kya hota hai?
   - call() function ko turant execute karta hai
   - Aur hum decide karte hain ki `this` kya hoga
   - Syntax:
     functionName.call(thisValue, arguments)

5) Yaha call() me kya hua?
   - SetUsername.call(this, username)
   - Iska matlab:
     ➜ SetUsername function run hoga
     ➜ Uske andar `this` = createUser ka this hoga
     ➜ Username createUser ke object me set hoga

6) Agar call() use nahi karte to kya hota?
   - Sirf SetUsername(username) likhte
   - To `this` global object ko point karta
   - createUser ke object me username set hi nahi hota
   - newUser.username undefined hota

7) createUser function ka role:
   - Ye ek constructor function hai
   - Ye user ka full object banata hai
   - Username (via SetUsername)
   - Email
   - Password

8) new keyword ka role:
   - Ek naya empty object create karta hai
   - this us naye object ko point karta hai
   - Agar return na ho, to new object return hota hai

9) Final output me kya milega?
   - newUser object ke andar:
     {
       username: "yash",
       email: "yash@gmail",
       password: "321"
     }

10) Important confusion clear:
    - call() inheritance nahi hai
    - Ye sirf function borrowing / reuse hai
    - Parent-child relationship nahi banti
    - Sirf ek function ka logic dusre function me use hota hai

11) Real-life example:
    - Ek function = username set karne ka kaam
    - Dusra function = complete user banana
    - call() = helper ko apne kaam me use karna

12) Key takeaway:
    - this samajh aagaya = JavaScript aadhi clear
    - call() se this control hota hai
    - Code reuse clean aur professional hota hai

====================================================
*/
