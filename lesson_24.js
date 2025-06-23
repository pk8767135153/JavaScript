/**
 * For Of Loop
 * 
 * Some time we array contain object
 *  [{}, {}, {}]
 */
let arr = [1,2,3,4,5]
// forof loop  on array
for (const i of arr) {
    // console.log(i);
}

// forof loop  on String
const greetings = "Hello World"
for (const j of greetings) {
    // console.log(j);
    
}

// forof loop  on Map

/**
 * Map : 
 * The map Object holds key-value pairs and 
 * Remembers the original insertion order of the keys. 
 * It is unique in the Map's collection.
*/
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set("FR","France")
map.set('IN',"India")

console.log(map)

// forof loop  on Map
for (const key of map) {
    // console.log(key)
}

// forof loop  on Map (Array Destruction)
for (const [key, value] of map) {
    // console.log(key," :- ",value)
}

const  myobject = {
    "game_1" : "NFS",
    "game_2" : "SpiderMan"
}
const  myobject_ = {
    game_1 : "NFS",
    game_2 : "SpiderMan"
}

// forof loop does not work on object
// we getting error like this : TypeError: myobject is not iterable

for (const element of myobject) {
    console.log(`${element} :--> ${myobject[key]}`)
}