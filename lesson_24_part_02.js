// for each loop
const language = ["cpp", "Python", "js", "ruby", "java"]

language.forEach(function name(item){
    // perform operation on each item present inside language
    // console.log(`Value is ${language} modify : ${language+"Add😊😊"}`);
})

language.forEach(
    (item) =>{
        // console.log(item )
    }
)

// pass the function
function printme(item){
    // console.log(item)
}

language.forEach(printme)


language.forEach((item, index, arr)=> {
    // console.log(item,index,arr)
})

let mycoding =[
    {
        name: "Pravin",
        score : 87
    },
    {
        name: "Pravinsingh",
        score : 97
    },
    {
        name: "Priyanka",
        score : 99
    },
    {
        name: "Korekar",
        score : 54
    },
    {
        name: "Arun",
        score : 100
    }
];

// mycoding.forEach(
//     (item)=>
//     (
//         // console.log(`Object ${item} : \n${item.name} \n${item.score}`);
        
//     )
// )

// (function add(num1,num2){
//     console.log(num1+num2)
// })
// (3,4);