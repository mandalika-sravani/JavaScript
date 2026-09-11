// .filter() --- creates a new array by filtering out elements

const ages = [6, 10, 15, 16, 17, 18, 19, 20, 50, 65];

const adult = ages.filter(isAdult);
const child = ages.filter(ischild);

console.log(`The ages: ${ages}`);
console.log(`The adults: ${adult}`);
console.log(`The children: ${child}`);

function isAdult(element) {
    return element >= 18;
}

function ischild(element) {
    return element < 18;
}


// Example with strings

const words = ["Apple", "Orange", "Pomegranate", "Cocomut", "Banana", "Kiwi", "Avacado"];

const short = words.filter(shortWords);
const long = words.filter(longWords);

console.log(`The words: ${words}`);
console.log(`The short words: ${short}`);
console.log(`The long words: ${long}`);

function shortWords(element) {
    return element.length <= 6;
}

function longWords(element) {
    return element.length > 6;
}