// ==================================================
// map() Method:-
// array ke har element ko transform karke
// naya array return karta hai
// ==================================================


// ---------------------------------------------
// Example 1: map() adds 10 to each number
// ---------------------------------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const ex1 = myNumbers.map((num) => {
  return num + 10;
});

console.log(ex1);
// Output:
// [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// ---------------------------------------------
// Example 2: forEach() does not return any value
// ---------------------------------------------

const ex2 = myNumbers.forEach((item) => {
  console.log(item);
});
// Output:
// 1 2 3 4 5 6 7 8 9 10


// ---------------------------------------------
// Example 3: map() chaining with filter()
// ---------------------------------------------

const ex3 = myNumbers
  .map((num) => num * 10)    // [10,20,30,40,50,60,70,80,90,100]
  .map((num) => num + 1)     // [11,21,31,41,51,61,71,81,91,101]
  .filter((num) => num >= 40); // [41,51,61,71,81,91,101]

console.log(ex3);
// Output:
// [41, 51, 61, 71, 81, 91, 101]
