// ======================= Promise One =======================

const PromisesOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is compelete");
        resolve()
    })
}, 1000)

PromisesOne.then(function() {
    console.log("Promise Consumed")
})


// ======================= Promise Two =======================

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})


// ======================= Promise Three =======================

const PromisesThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Yash", email: "yashgwala4gmail.com" })
    }, 1000)
})

PromisesThree.then(function(user) {
    console.log()
})


// ======================= Promise Four (then / catch / finally) =======================

const PromisesFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({ username: "Manish", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

PromisesFour
.then(function(user) {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Tha Promise is either resolved or rejected")
})


// ======================= Promise Five (async / await) =======================

const PromiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "321" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// ======================= Fetch with async / await =======================

async function getAllUsers() {
    try {
        const response = await fetch('https:/jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error")
    }
}

// getAllUsers()


// ======================= Fetch with then / catch =======================

fetch('https://api.github.com/users/yashgwala321')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error)
})


// ======================= NOTES (What I learned today) =======================

// 1) Promise ek object hota hai jo future me complete hone wale async task ko represent karta hai
// 2) Promise ke 3 main states hote hain:
//    - pending
//    - fulfilled (resolve)
//    - rejected (reject)
//
// 3) resolve() call hone par .then() execute hota hai
// 4) reject() call hone par .catch() execute hota hai
// 5) .finally() hamesha chalega — resolve ho ya reject
//
// 6) Promise chain ho sakti hai (then ke baad then)
// 7) Ek then se value return karke next then me use kar sakte hain
//
// 8) async / await promise ko read karna easy bana deta hai
// 9) async function ke andar await use hota hai
// 10) try / catch async-await me error handle karne ke liye hota hai
//
// 11) fetch() by default promise return karta hai
// 12) fetch ka response directly data nahi hota, usse response.json() banana padta hai
//
// 13) Same kaam then/catch aur async/await dono se ho sakta hai
//     async/await zyada readable hota hai
