// reduce() -- reduce the elements of an array to a single value

const grades = [50, 65, 80, 75, 90, 85, 95];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}