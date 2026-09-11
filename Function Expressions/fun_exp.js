// function expression -- a way to define functions as values or variables

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(function(element) {
    return Math.pow(element, 2)
});

const cubes = numbers.map(function(element) {
    return Math.pow(element, 3)
});

const evenNum = numbers.filter(function(element) {
    return element % 2 == 0;
});

const oddNum = numbers.filter(function(element) {
    return element % 2 == 1;
});

const total = numbers.reduce(function(acc, element) {
    return acc + element;
});

console.log(`The Numbers: ${numbers}`);
console.log(`The Squares of numbers: ${squares}`);
console.log(`The Cubes of numbers: ${cubes}`);
console.log(`The Even Numbers: ${evenNum}`);
console.log(`The Odd Numbers: ${oddNum}`);
console.log(`The total: ${total}`);