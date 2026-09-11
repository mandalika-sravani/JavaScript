//arrow functions -- a concise way to write function expressions

const hello = (name, age) => { console.log(`Hello ${name}`)
                                console.log(`Your age is ${age}`)};

hello("Sravani", 30);

//example with numbers as function expression

const num = [6, 7, 8, 9, 10];

const sqs = num.map((element) => Math.pow(element, 2));
const cubs = num.map((element) => Math.pow(element, 3));
const even = num.filter((element) => element % 2 == 0);
const odd = num.filter((element) => element % 2 == 1);
const sum = num.reduce((acc, element) => acc + element);

console.log(`The Numbers: ${num}`);
console.log(`The Squares of numbers: ${sqs}`);
console.log(`The Cubes of numbers: ${cubs}`);
console.log(`The Even Numbers: ${even}`);
console.log(`The Odd Numbers: ${odd}`);
console.log(`The total: ${sum}`);
