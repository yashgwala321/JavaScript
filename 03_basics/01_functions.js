
function sayMyName () {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName()

function addTwoNumbers (number1, number2) {
    //let result = number1 + number2
    //return result
    // console.log(number1 + number2);
    return number1 + number2
}

const result = addTwoNumbers(5, 5)
//console.log("Result:" , result); 


function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a unsername");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("hitesh")
console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage("hitesh"));


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200,400,500,700));


//----------------------------------------------------------------------------

//object function

const user = {
    username: "yash",
    price: 199
}

function handleObject (anyobject) {
    console.log(`unername is ${anyobject.username} and price is ${anyobject.price}`);   
}
//handleObject(user)


handleObject({  
    username: "sem",
    price: 399
}) 


//-----------------------------------------------------------------------------

//Array function

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

//------------------------------------------------------------------------------