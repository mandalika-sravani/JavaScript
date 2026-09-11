// Arrays -- a variable like structure that can hold more than one value

let flowers = ['rose', 'jasmine', 'lillies','hibiscus', 'tulips'];

for(let i = flowers.length - 1; i >= 0; i--) {
    console.log(flowers[i]);
}

// Spread operator --- ... allows an iterable such as an array or string to be expanded into
//                          seperate elements (unpacks the elements)

let vegetbles = ['carrots', 'potatoes', 'celery'];
let fruits =['apple', 'mango', 'orange', 'banana'];

let food = [...fruits, ...vegetbles, "eggs", 'milk'];

console.log(food);

// Rest Parameters --- (...rest) allows a function work with a variable number of arguments
//                          by bundling them into an array.
//                  spread ---- expands an array into seperate elements
//                  rest ---- bundles sepetate elements into an array

function sum (...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

function average (...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const sumtotal = sum(1,5,8,3,6,7);

console.log(`Your sum is ${sumtotal}`);

const avgtotal = average(1,5,8,9,6,7);

console.log(`Your average is ${avgtotal}`);


