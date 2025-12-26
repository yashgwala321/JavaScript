const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

//----------------------------------------------------------------------------------

const another_arry = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_arry = another_arry.flat(Infinity)

// console.log(real_another_arry);

//-----------------------------------------------------------------------------------

// .isArray() ka use check karne ke liye hota hai ki koi value array hai ya nahi.

// console.log(Array.isArray("hitesh"))

// Array.from() ka use array jaisa data ko proper array me convert karne ke liye hota hai.
// console.log(Array.from("hitesh"));  //['h','i','t','e','s','h']
// console.log(Array.from({name: "hitesh"})); //interesting
 
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));

//------------------------------------------------------------------------------------



// Practice  

const famliy1 = ["yash","rajni","bheru"]
const famliy2 = ["sonu","dhanna","vimla"]
const famliy3 = ["Suraj","DN","Rekha"]

// famliy1.push(famliy2)
// console.log(famliy1);

const famliy = [...famliy1, ...famliy2, ...famliy3]
console.log(famliy.join());



