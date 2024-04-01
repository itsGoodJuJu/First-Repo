// 10 min demo. Teach the class how to access an array of booleans, printing the index at which each true value is present

let trueFalse = [true, true, false, true, false];

for(let i=0; i<trueFalse.length; i++) {
    if(trueFalse[i] === true) {
        console.log(i);
    }
}