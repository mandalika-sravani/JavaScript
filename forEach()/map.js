// .map() --- accepts a callbacks and applies that function to each element of an array,
//              then return a new array

const students = ["Arjun", "Suprathik", "Dhruv", "Rishab", "Vedanth"];

const studentUpper = students.map(upperCase);
const studentLower = students.map(lowerCase);

console.log(studentUpper);
console.log(studentLower);

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}

// Another example with Date

const dates = ["2024-01-05", "2025-02-21", "2023-10-28", "2026-04-26"];

const formatDate = dates.map(formatDates);

console.log(formatDate);

function formatDates(element) {
    const part = element.split("-");
    return `${part[2]}/${part[1]}/${part[0]}`;
}
