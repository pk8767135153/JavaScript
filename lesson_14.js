// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Pravinsingh"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// ----------------------------------------------------

// Object constain another object
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        firstname:"Hitesh",
        lastname:"Choudhary"
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.firstname)

// ----------------------------------------------------


// ----------------------------------------------------
// Join two object
let object_01 = { 1:"value 1", 2 : "value 2"}
let object_02 = { 3:"value 1", 4 : "value 2"}

// 1st way (worng way)
// for this same problem like array
// like it will create neaseted object
let join_01 =  {object_01,object_02}
// console.log(join_01)

// 2ed way (right way but less use)
let join_02 = Object.assign({},object_01,object_02)
// console.log(join_02)


// if we have multiple object so how to join
let object_03 = {5:"value 5",6:"value 6"}
let join_03 = Object.assign({},object_01,object_02, object_03)
// console.log(join_03)

// 3ed way ( right way ,most used)
let join_04 = {...object_01, ...object_02}
let join_05= {...object_01, ...object_02, ...object_03}
// console.log(join_04)
// console.log(join_05)
// 
// ----------------------------------------------------
console.log(tinderUser)
// get all keys 
console.log(Object.keys(tinderUser))

// get all values
console.log(Object.values(tinderUser))

// get all key and value in array format
console.log(Object.entries(tinderUser))
// to check specific value lie or not lie
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedin'))
// ----------------------------------------------------
// ----------------------------------------------------
