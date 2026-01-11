// ================= ES6 CLASS =================

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password} abc`
    }

    changeUsername() {
        return `${this.username.toUppperCase()}`
    }
}

const show = new User("Yash", "yash4@gamil.com", 321)

console.log(show)
console.log(show.encryptPassword)
console.log(show.changeUsername)


// ================= BEHIND THE SCENE =================

function User1(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function () {
    return `${this.password} abc`
}

User1.prototype.changeUserName = function () {
    return `${this.username}`
}

const showUserData = new User1("Sonu", "Sonu4@gamil.com", 321)

console.log(showUserData.encryptPassword())
console.log(showUserData.changeUserName())



/*
================= Notes =================

1️⃣ CLASS KYA HAI?
- class ek blueprint hoti hai
- Isse hum object banate hain using 'new'
- constructor automatically call hota hai jab object banta hai

2️⃣ CONSTRUCTOR KA KAAM
- constructor data receive karta hai
- 'this' ka matlab hota hai current object
- this.username = username
  matlab object ke andar username property banana

3️⃣ CLASS KE METHODS
- encryptPassword() aur changeUsername()
- Ye methods prototype me automatically store hote hain
- Isliye har object inhe access kar sakta hai

4️⃣ METHOD CALL KARNA
- show.encryptPassword()  ❌ yahan () lagana chahiye)
- bina () ke sirf function reference milta hai

5️⃣ BEHIND THE SCENE (IMPORTANT)
- class sirf syntactic sugar hai
- JavaScript andar se function + prototype hi use karti hai

6️⃣ PROTOTYPE KYA HAI?
- Prototype ek object hota hai
- Jisme methods store hote hain
- Har object prototype se methods access karta hai

7️⃣ FUNCTION CONSTRUCTOR
- function User1() bhi constructor ki tarah kaam karta hai
- 'new' keyword se object create hota hai

8️⃣ CLASS vs FUNCTION
- class → clean & modern syntax
- function + prototype → old but powerful way
- Dono internally SAME kaam karte hain

9️⃣ KEY RULE
- constructor → data set
- prototype / class methods → common functionality

================= CONFUSION CLEAR =================
✔ class alag cheez nahi hai
✔ class = function + prototype
✔ this hamesha current object ko point karta hai

*/
