//const tinderUser = new Object()    // ye Singleton object hai 
const tinderUser = {}                // ye Non Singleton object hai  

tinderUser.id = "123abc"
tinderUser.name = "yash"
tinderUser.isLoggedIn = false

//console.log(tinderUser);  

const reguarUser = {
    email:"somu@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh",
            lastname: "gwala"
        }
    }
}

//console.log(reguarUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
 
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "yash@gamil.com",
    },
    {
        id: 1,
        email: "yash@gamil.com",
    },
    {
        id: 1,
        email: "yash@gamil.com",
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//--------------------------------------------------------------------------------------------------

const course = {
     coursename: "js in hindi", 
     price: "999",
     courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); 


const {courseInstructor: instructor} = course

//console.log(courseInstructor); 
console.log(instructor);






//------------------------------------------------------------------------

// JSON Object and Array of Objects => Jab API se data aata hai, to format kaisa hota hai vo hai ye

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]



