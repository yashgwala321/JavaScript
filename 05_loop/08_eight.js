// ==================================================
// reduce() Method:-
// array ke saare values ko combine karke
// ek single final value return karta hai
// ==================================================


// ---------------------------------------------
// Example 1: reduce() with normal function
// (accumulator + current value ko samajhne ke liye)
// ---------------------------------------------

const myNums = [1,2,3,4,5];

const myTotal1 = myNums.reduce(function (acc, currVal) {
  console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);

console.log(myTotal1);
// Output (step-by-step):
// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// acc: 6 and currVal: 4
// acc: 10 and currVal: 5
// Final Output:
// 15


// ---------------------------------------------
// Example 2: reduce() using arrow function (short way)
// ---------------------------------------------

const myTotal2 = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal2);
// Output:
// 15


// ---------------------------------------------
// Example 3: reduce() with array of objects
// (real-life example: shopping cart total)
// ---------------------------------------------

const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 1299 },
];

const priceToPay = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(priceToPay);
// Output:
// 11296
