const score = 400
// console.log(`Automatical Detect js it is Number so score is ${score} \n\t its type is ${typeof(score)}`); // 400

const balance = new Number(2341)
// console.log(balance) // [Number: 2341]

// console.log(`balance is ${balance} `)

// console.log(`To String Method  ${balance.toString()} \nType of balance ${typeof balance} \nLength of the ${balance.toString().length} `)

// console.log(`To make our number having limit decimal digits ${100.323534.toFixed(2)} \nIf we does not provide any number so it will take 0`)
// console.log(`To make our number having limit decimal digits ${100.323534.toFixed()}`)

// console.log(`To make our number having limit decimal digits ${100.323534.toPrecision(2)}`)
// console.log(`To make our number having limit decimal digits ${100.323534.toPrecision(5)}`)

const hundreds = 10000000

// accourding us standard (by_defalut standard)
// console.log(hundreds.toLocaleString())

// Accourding indian standard
// console.log(hundreds.toLocaleString('en-IN'))


// ----------------------------------

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.65))
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.min(3,4,5,6,11)) // 3
// console.log(Math.max(3,4,5,6,11)) // 11


console.log(Math.random())
// random always return value which lies between 0 to 1

console.log((Math.random()*10)+1)
// This will make shore our number is greater than 1 not less than 1

console.log(Math.floor(Math.random()*10)+1)


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
