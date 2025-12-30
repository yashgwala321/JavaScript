// Q1 Day Number → Day Name
let day = 7;
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7: 
        console.log("Sunday")
        break;
    default:
        console.log("invalid day")
        break;
}



// Q2. Simple Calculator
let num1=5;
let num2=10;
let operator = "-";
switch (operator) {
    case "+":
        console.log(num1 + num2)
        break;
    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("invalid operator");
        break;
}




// Q3. Month Number → Days
let month = 1;

switch (month) {
    case 1:
        console.log("31 days");
        break;

    case 2:
        console.log("28 days");
        break;

    case 3:
        console.log("31 days");
        break;

    case 4:
        console.log("30 days");
        break;

    case 5:
        console.log("31 days");
        break;

    case 6:
        console.log("30 days");
        break;

    case 7:
        console.log("31 days");
        break;

    case 8:
        console.log("31 days");
        break;

    case 9:
        console.log("30 days");
        break;

    case 10:
        console.log("31 days");
        break;

    case 11:
        console.log("30 days");
        break;

    case 12:
        console.log("31 days");
        break;

    default:
        console.log("Invalid month");
}
