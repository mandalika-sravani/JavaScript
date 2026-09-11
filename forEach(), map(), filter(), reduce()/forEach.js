// forEach() -- method used to iterate over the elements of an array and //
//                apply a spcecified function (Callback) te each element.

let numbers = [2,4,6,8];

numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}