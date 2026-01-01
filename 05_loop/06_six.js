// ==================================================
// forEach vs filter:-
// forEach:- value return nahi karta,
// filter:- condition ke base par naya array return karta hai
// ==================================================


// ---------------------------------------------
// Example 1: forEach does NOT return any value
// ---------------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
  return item; // ye return ignore ho jata hai
});

console.log(values); // undefined


// ---------------------------------------------
// Example 2: filter with numbers (commented)
// ---------------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });


// ---------------------------------------------
// Example 3: forEach used like filter (manual way)
// ---------------------------------------------

const newNum = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});

console.log(newNum);


// ---------------------------------------------
// Example 4: filter with array of objects
// ---------------------------------------------

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];


// ---------------------------------------------
// Example 5: filter books by genre
// ---------------------------------------------

let userBooks = books.filter((book) => book.genre === "History");
console.log(userBooks);


// ---------------------------------------------
// Example 6: filter books by year and genre
// ---------------------------------------------

const userBooks1 = books.filter((book) => {
  return book.publish >= 2000 && book.genre === "Science";
});

console.log(userBooks1);
