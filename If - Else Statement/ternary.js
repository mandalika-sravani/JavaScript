//Ternary operator -- a shortcut to if() and else() statements helps to assign
//                      a variable based on a condition
//                          condition ? codeIfTrue : codeIfFalse

//let age;
age = 18;
let message = age >= 18 ? "You are an adult" : "You are a Minor";
console.log(message);

let time = 10;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting);

//let isStudent = true;
//result = isStudent ? "You are a student" : "You are NOT a student";
//console.log(result);

let purchaseAmount = 150;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);