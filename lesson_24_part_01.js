// for in loop

const myObject ={
    js: "Javascript",
    cpp: "C++",
    rb : "ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} :--> ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'cpp']

for (const key in programming) {
    console.log(`Array Key ${key} :--> ${programming[key]}`);
}

// forin loop not working on forin 