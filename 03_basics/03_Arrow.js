const user = {
    username: "yash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website` );
        console.log(this);
        // this => this corrent value ki baat karta hai 
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() 

// console.log(this);   

// function chai(){
//    let username = "yash"
//    console.log(this);
// }

const chai = function () {
    let username = "Sanju"
    console.log(this.username);  //undefined 
}

// chai()  

const chai1 = () => {       //arrow function 
    let username = "yash"
    console.log(this);
 }

chai1()

// const addtwo = (num1, num2) => {            // => isme return lagana padta hai  
//     return num1 + num2
// }
//console.log(addtwo(5,5));


//const addtwo = (num1, num2) => num1 + num2      // => isme return nhi lagana padta 

//const addtwo = (num1, num2) => (num1 + num2)     // => isme bhi return nhi lagana padta hai


const addtwo = (num1 , num2) => ({ username: "yash"})
console.log(addtwo(5,5));

