// ===================== BASE CLASS =====================

class User{
    constructor(usename){
        this.usename = usename
    }

    logMe(){
        console.log(`UserName is ${this.usename}`);
    }
}


// ===================== USER OBJECT =====================

const user1 = new User ("yash")
console.log(user1)


// ===================== CHILD CLASS (INHERITANCE) =====================

class Teacher extends User{
    constructor(usename,email,password){
        super(usename);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}


// ===================== TEACHER OBJECT =====================

const chai = new Teacher("Harsi","harshi4@gmail",3302)

chai.addCourse()





/*
===================== TODAY'S LEARNING NOTES =====================

TOPIC: ES6 Classes & Inheritance (Beginner Friendly)

1) Class kya hoti hai?
   - Class ek blueprint hoti hai
   - Jisse hum multiple objects bana sakte hain
   - Ye OOP (Object Oriented Programming) ka part hai

2) User class:
   - Ye ek base / parent class hai
   - Isme constructor hai jo username set karta hai
   - logMe() ek method hai jo username print karta hai

3) constructor ka role:
   - Jab bhi new keyword use hota hai
   - constructor automatically call ho jata hai
   - this keyword naye object ko refer karta hai

4) new User("yash"):
   - Ek naya object create hota hai
   - usename property set hoti hai
   - user1 me User class ka data aa jata hai

5) Inheritance kya hota hai?
   - Ek class dusri class ke features use karti hai
   - Code reuse hota hai
   - Parent → Child relationship banta hai

6) Teacher extends User:
   - Teacher child class hai
   - User parent class hai
   - Teacher ko User ke methods mil jate hain

7) super() ka kaam:
   - Parent class ke constructor ko call karta hai
   - Yaha super(usename) ka matlab:
     ➜ User class ka constructor run hoga
     ➜ usename parent me set ho jayega

8) Teacher class me extra features:
   - email aur password add kiya
   - addCourse() method add kiya
   - Ye child ke apne features hain

9) new Teacher(...):
   - Pehle empty object create hota hai
   - Parent (User) ka constructor chalta hai
   - Phir Teacher ka constructor chalta hai
   - Final object ready ho jata hai

10) Important beginner confusion:
    - super() ke bina this use nahi kar sakte
    - extends lagane se parent ke methods milte hain
    - Child apne extra methods add kar sakta hai

11) Real-life example:
    - User = normal user
    - Teacher = user + extra powers
    - Jaise:
      User → login
      Teacher → login + add course

12) Key takeaway:
    - Class = blueprint
    - extends = inheritance
    - super() = parent constructor call
    - Child class parent se powerful hoti hai

=======================================================
*/
