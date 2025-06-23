// Destrucuring Of Array

const course = {
    courseName: "js in hindi",
    price : "999",
    courseInstructor: "Hitesh"
}

// Destructure of Object
// scope_variable {properties:nick_name} = object_name
const {courseInstructor : teacher} = course

// api 
// some time we get responce form api in the form of json format 
// {
//     "name":"hitesh",
//     "courseName":"DS in hindi",
//     "price":"free"
// }