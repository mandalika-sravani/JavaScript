// Functions -- A section of reusable code.
//              Declare code once, use it whenever you want.
//              Call the function to execute that code.

/*function happyBirthday(username, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
}
happyBirthday("Rithvik", 7); */

function add(x, y){
    let result = x + y;
    return result;
}

function sub(x, y){
    let result = x - y;
    return result;
}

function mul(x, y){
    let result = x * y;
    return result;
}

function div(x, y){
    let result = x / y;
    return result;
}

let adans = add(7, 25);
let sbans = sub(84, 64);
let mlans = mul(9, 7);
let dians = div(45, 9);
console.log(adans);
console.log(sbans);
console.log(mlans);
console.log(dians);