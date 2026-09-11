// JavaScript Objects -- A collection of related properties or methods
//                           object = {key: value, function()}

const person = {
    firstName: "Rithvik",
    lastName: "Yadavalli",
    age: 7,
    isEmployed : false,
    sayHello : () => console.log("Hi! I'm not an employee")
}

const person2 = {
    firstName: "Chandrakanth",
    lastName: "Yadavalli",
    age: 35,
    isEmployed : true,
    sayHello : () => console.log("Hi! I worked for 10 years")
}

console.log("The details of person 1")
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();

console.log("The details of person 2")
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();

// this -- a reference to the object where THIS is used 
//              person.name = this.name

const person3 = {
    firstName: "Siddhartha",
    lastName: "Mandalika",
    age: 34,
    isEmployed : true,
    sayHello : function(){console.log(`Hi! My last name is ${this.lastName}`)}
}

console.log("The details of person 3")
console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.age);
console.log(person3.isEmployed);
person3.sayHello();