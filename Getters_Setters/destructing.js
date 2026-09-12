// destructing -- extract values from arrays and objects, then assign them to variables
//                  in a convenient way 
//                      [] -- to perform array destructing
//                      {} -- to perform object destructing

let a = 1, b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

const colors = ["red", "white", "blue", "green", "black", "pink"];

[colors[1], colors[3]] = [colors[3], colors[1]];

console.log(colors);

// Another Example

function displayPerson({firstName, lastName, age, job}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName : "Chandrakanth",
    lastName : "Yadavalli",
    age : 35,
    job : "Software"
}

const person2 = {
    firstName : "Sanjeev",
    lastName : "Kapoor",
    age : 55,
    job : "Master Chef"
}

displayPerson(person1);
displayPerson(person2);