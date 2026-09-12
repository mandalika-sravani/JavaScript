// sort() -- method used to sort elements of an array in place.

let numbers = [10, 1, 6, 7, 3, 2, 5, 9, 4, 8];

numbers.sort();

console.log(numbers);

const people = [{name: "Sahasra", age: 25, gpa: 3.5}, 
                {name: "Chandana", age: 20, gpa: 4.5}, 
                {name: "Swathi", age: 22, gpa: 3.7}];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

//Shuffle an array

const cards = ['A', 10, 8, 5, 3, 2, 1, 9, 'J', 'L', 'Q'];

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

