// Object for in loop
const myObject = {
    js: `javascript`,
    cpp: `c++`,
    rb: `ruby`,
    swift: `swift by apple`
}

for (const key in myObject) {
     //console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//--------------------------------------------------------------------------------------------------------

// Array for in loop
const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    //console.log(programming[key])
    console.log(`${key} => ${programming[key]}`)
}

