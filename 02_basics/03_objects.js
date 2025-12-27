//Singleton 
//object.create

//Object literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "yash",
    "full name": "Yash Gwala",
    [mySym]: "mykey1",
    age: 18,
    location: "ajmer",
    email: "yashgwala4@gamil.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]);


JsUser.email = "sonugwala@gmail.com"
//Object.freeze(JsUser)                   // ye jsuser ko freeze kar dega esse koi ese chhed nhi sakta and change nhi kar sakta
JsUser.email = "harshugwala@gmail.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("hello js user");
}
JsUser.greetingtwo = function() {
    console.log(`hello js user, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

