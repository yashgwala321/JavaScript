// ===============================
// forEach Loop:-
// array ka method hai jo array ke har element par
// ek-ek baar function chalata hai,
// lekin koi value return nahi karta.
// ===============================

// ---------------------------------------------
// Example 1: Basic forEach with Normal Function
// ---------------------------------------------

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (item) {
  console.log(item);
});


// ---------------------------------------------
// Example 2: forEach Loop using Arrow Function
// ---------------------------------------------

coding.forEach((val) => {
  console.log(val);
});


// ---------------------------------------------
// Example 3: forEach using Separate Function
// ---------------------------------------------

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);


// ---------------------------------------------
// Example 4: forEach with item, index, and array
// ---------------------------------------------

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});


// ---------------------------------------------
// Example 5: forEach with Array of Objects
// ---------------------------------------------

const myCoding = [
  {
    languageName: "javascript",
    languageFilename: "js",
  },
  {
    languageName: "java",
    languageFilename: "java",
  },
  {
    languageName: "python",
    languageFilename: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
