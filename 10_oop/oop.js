// ---------------- OBJECT LITERAL ----------------

const user = {
    username: "yash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
};

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


// ---------------- CONSTRUCTOR FUNCTION ----------------

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    return this;
}


// ---------------- OBJECT INSTANCES ----------------

const userOne = new User("Yash", 12, true);
const userTwo = new User("IM Coder", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);









/*
===================== TODAY'S LEARNING =====================

1) Object Literal:
   - Object directly {} ke andar banaya
   - Properties aur methods ek jagah define kiye
   - `this` object ke current context ko refer karta hai

2) Method inside Object:
   - getUserDetails() function object ke andar hai
   - `this.username` se object ki property access hoti hai

3) Constructor Function:
   - Function ko capital letter se likhte hain (User)
   - `new` keyword se new object create hota hai
   - `this` har new object ke liye alag hota hai

4) new Keyword:
   - Empty object create karta hai
   - Constructor function call hota hai
   - `this` usi new object ko point karta hai

5) Multiple Instances:
   - userOne aur userTwo alag-alag objects hain
   - Same constructor se bane but data different hai

6) constructor Property:
   - userOne.constructor batata hai object kis function se bana
   - Output me `User` function milta hai

7) OOP Concept Clear:
   - Object = data + behavior
   - Constructor = object banane ka blueprint

===========================================================
*/
