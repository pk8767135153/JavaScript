function calculateCartPrice(...num1){ // here ... (three dots) rest operator  similar operater used in spride operation that time we called sperid operator.
    return num1
}
console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,300,400));

function calculateCartPrice_01(num1,num2,...num){
    console.log(`num1 : ${num1}\nnum2 : ${num2}\nnum :${num}`)
}

let n = [11,22,33,44,55,66,77,88]

calculateCartPrice_01(n)
calculateCartPrice_01(11,22,33,44,55,66,77,88)



let username = {
    userName:"Pravinsingh",
    price:999
}

// pass object inside the function as parameter
function handleObject(anyobject){
    console.log(`\n\nUsername is ${anyobject.userName} \nPrice is ${anyobject.price}`)
}
handleObject(username)

//pass array inside the function as parameter

const arr = [11,22,33,44,55]
function returnarray(arr){
    return arr[1]
}

console.log(`Call Function get array element as return : ${returnarray(arr)}`)