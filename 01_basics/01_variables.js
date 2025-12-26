const accountId = 144553;
let accountEmail = "yashgwala4@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

//accountId = 2 // not allowed 

accountEmail = "@gmail.com";
accountPassword = "3309";
accountCity = "ajmer";

console.log(accountId);

/*
    prefer not to use var 
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
