 // Immediately Invoked Function Expressions (IIFE) 

 (function chai() {
    console.log(`DB CONNECTED`);
 })();

//Arrow
 ((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
 })("yash");

