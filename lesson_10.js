// // Date 

// let myDate = new Date()
// console.log(myDate); // 2025-06-19T12:30:55.196Z

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate01 = new Date(2023,12,23)


// // For india we prefer mm-dd-yyyy
// let myCreatedDate02 = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate01.toLocaleDateString())
// console.log(myCreatedDate02.toLocaleDateString())

// // let myTimeStamp = Date.now()
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// // comparizon common quection 
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth())
// we always get current_month - 1 = output because our month start inside js 0 mean 0-jan
console.log(newDate.getDay())

newDate.toLocaleDateString('default',{weekday:"long",
    // timeZone:''
})

