// Array of Objects

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 85}, 
                {name: "watermelon", color: "red", calories: 60},
                {name: "banana", color: "yellow", calories: 105},
                {name: "pineapple", color: "yellow", calories: 65},
                {name: "avacado", color: "green", calories: 55}];

fruits.push({name: "mango", color: "yellow", calories:45});

console.log(fruits[2].name);
console.log(fruits[4].color);
console.log(fruits[0].calories);

console.log(fruits);

fruits.forEach(fruit => console.log(fruit));

const fruitName = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCal = fruits.map(fruit => fruit.calories);

console.log(fruitName, fruitColor, fruitCal);

const yelloFruits = fruits.filter(fruit => fruit.color == "yellow");
const lowCal = fruits.filter(fruit => fruit.calories < 70);

console.log(yelloFruits);
console.log(lowCal);