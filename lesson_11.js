/**
 * Array :
 *      javascript array are resizable arrays
 *      zero indexing array
 *      when you copy the array that time you can make shallow copy
 */

// First way to decaler array.
// const myArr = [0,1,2,3,4,5]
// const myArr1 = [0,1,"Pravin",true,2,3,4,5]
// const myHeros = ["shaktiman","naagraj","Father"]

// Second way to decaler array

// const myArr2 = new Array(1,2,3,4,5,6)
// const myArr3 = new Array("pravin","korekar")

// console.table([myArr,myArr1,myArr2,myArr3,myHeros])
// console.log(typeof myArr);
// console.log(typeof myArr3);
// console.log(typeof myHeros)

// Operation on array

// ---------------------------------------------
// operArr =[]
// console.log(`Array is ${operArr}\nLength Of Array is ${operArr.length}`)

// operArr.push(23)
// operArr.push("Prain")
// operArr.push(3)
// operArr.push("Singh")
// console.log(`Array is ${operArr}\nLength Of Array is ${operArr.length}`)

// operArr.pop() // pop remove last element 
// console.log(`Array is ${operArr}\nLength Of Array is ${operArr.length}`)

//---------------------------------------------

// myArr = [1,2,3,4,5]
// console.log(`My array : ${myArr}`);
// unshift() operation : Add element at start position index 0
// myArr.unshift(20)
// console.log(`My array : ${myArr}`);

// Shift Opertation : pop the start element index 0
// myArr.shift()
// console.log(`My Array ${myArr}`)

// --------------------------------------------
// getting output in boolean format
myArr = [1,2,3,4]

// to check 3 present inside array or not present
// console.log(`My array is : ${myArr}\nCheck 3 present inside array or not :(true : present and false not-present): Answer is  ${myArr.includes(3)} `);

console.log(typeof myArr)

// to convert array to string like we can join all array element by using join method

const newArrString = myArr.join()
// console.log(`Original Array : ${myArr} \nType of Original Array : ${typeof(myArr)} \nString Format Array ${newArrString} \nType of newArrayString : ${typeof newArrString}`)


// -------------------------------------------

// IMP : Interview Quesition : Slice and Splice

const arr_01 = [1,2,3,4,5,6,7,8]
// Slice :In the Slice we provide specific range so it will return subarry which 
// console.log("Original Array : "+arr_01)
// console.log("arr_01.slice(Start,End(not-include)) : "+ arr_01.slice(3,5))
// console.log(arr_01.slice(3,5))

const arr_02 = [11,22,33,44,55,66,77,88]
// splice : it will return specific range of element inside the array but it also delete these element inside the original list 
// let splice_arr = arr_02.splice(1,3)
// console.log(`Original Array :\n\t\t ${arr_02}\n\n Slice Operation perform on range 1 to 3 make here end range include \n\t\t ${arr_02.splice(1,3)}\n\n After Splice operation done Our Oringal Array is : \n \t\t ${arr_02}`)
// console.log()




