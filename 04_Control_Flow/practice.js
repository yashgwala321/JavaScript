//+++++++++++++++++++++++++++++++ Practice +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q1. Even / Odd
const num = 1
if(num % 2 == 0){
    console.log("Even Number");
}
else {
    console.log("Odd Number")
}



// Q2. Positive / Negative / Zero
const number = 0
if(number > 0){
    console.log("Positive");
}
else if(number < 0 ){
    console.log("negative")
}
else {
    console.log("zero")
}


// Q3. Voting Eligibility
const age = 17
if(age >= 18){
    console.log("Eligible For Vote");
}
else{
    console.log("Not Eligible");
}


// Q4. Largest of Two Numbers
let a = 15;
let b = 10

if(a > b){
    console.log("a is greter");
}
else if(a < b){
    console.log("b is greter");
}
else {
    console.log("both are equal");
}


// Q5. Marks → Pass / Fail
const marks = 32;
if(marks >= 33){
    console.log("Pass")
}
else{
    console.log("fail");
}


// Q6. Grade System
let papermarks = 90;
if (papermarks >= 90) {
    console.log("A")
} 
else if(papermarks >= 75 && papermarks <= 89  ){
    console.log("B")
}
else if (papermarks >= 50 && papermarks <= 74){
    console.log("C");
}
else {
    console.log("Fail");
}