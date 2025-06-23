/**
 * More about Array
 */

const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_hero = ["superman","flash","batman","Hero"]

// console.log(`Marvel Heros :\t ${marvel_heros}\n\DC_Hero :\t ${dc_hero}`)
// console.log(`Marvel Heros Length is ${marvel_heros.length}`)

// marvel_heros.push(dc_hero) 
// push will add array as a element so marvel_heros having length
// console.log(`Marvel Heros Length is ${marvel_heros.length}`)
// console.log(`Marvel Heros : `)
// console.log(marvel_heros)
// console.table([marvel_heros,dc_hero])
// o/p : [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// o/p : [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// concat 

// console.log("Marvel Heros : ")
// console.log(marvel_heros)

// console.log("DC Hero : ")
// console.log(dc_hero)

let all_heros = marvel_heros.concat(dc_hero)
// concat can combine two array element wise 
// console.log(all_heros)

// Spred Operator
let indian_hero = ["tata","A.P.J","Bhabha"]
// const all_hero_01 = [...marvel_heros,...dc_hero]
// console.log(all_hero_01)

const all_hero_01 = [...marvel_heros,...dc_hero, ...indian_hero ]
// console.log(all_hero_01)

const another_array = [1,2,3,["Pravin","Jay","Durgesh",33,44,22],[232,3423]]
// we don't like above array depth so we want to make simple array
const real_another_array = another_array.flat(Infinity)
// note : where we pass Infinity there we can pass exect depth of array
// console.log(`Length of anoter_array : ${another_array.length}\nLength of Real Array : ${real_another_array.length}`)
// console.log(real_another_array)

// --------------------------------------------------
// Some time when we are performing we scraping that time we get data in form of arr so we can check by using isArray() method

console.log(Array.isArray("Pravin"))
console.log(`To Conver String format ${Array.from("Prainsingh")}`)
console.log(`To Conver String format ${Array.from(["Prainsingh","Korekar"])}`)
// console.log(Array.from(["Prainsingh","Korekar"]))

// Interesting 
// console.log(Array.form({name:"Pravin"}))



let score_01 = 100
let score_02 = 200
let score_03 = 300
// to convert multiple variable into single array format
console.log(Array.of(score_01,score_02,score_03))


