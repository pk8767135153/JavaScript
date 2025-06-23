// let name = "Pravinsingh"
// const repoCount = 50

// // console.log(name+" "+repoCount);

// // 
// // console.log(`My name is ${name} and I have ${repoCount} Repository`)

// // another way to decale string
// const gameName = new String("PravinsinghKorekar")
// // console.table([name,gameName])
// // console.log(`normal String ${name}\n\n by using new key word we decaler ${gameName}`)
// // console.table([gameName])
// // console.log(`\n\n`)
// // console.table(name.toUpperCase())
// // console.log(name.charAt(2))
// // console.log(name.indexOf('i'))
// // console.log(name.substring(0,4))
// // substring(start,end) : end value not include
// console.log(name)
// let slice_string = gameName.slice(-1,0)
// console.log(slice_string)


// ----------------------------------

const newStringOne = "      Pravin      "
console.log(newStringOne.trim());


const url = 'https://pravinkorekar.com/pravin%20korekar'
// 'https://pravinkorekar.com/pravin%20korekar'

console.log(url.replace('%20','-'))
// o/p : https://pravinkorekar.com/pravin-korekar

console.log(url.includes('https'))
// to chech specific part present inside string, return type boolean

split_str = "p-ra-v-in-singh"
console.log(split_str.split('-'))

split_list = split_str.split('-')
console.log(typeof(split_list))