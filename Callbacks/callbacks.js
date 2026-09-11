// Callbacks  ---  a function that is passed as an argument to another function

//          Used to handle asynchronous operations:
//          1. Reading a file
//          2. Network Requests
//          3. Interacting with databases

sum(displayPage, 5, 7);
sum(displayConsole, 8, 9);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    let display = document.getElementById("h1Label");
    display.textContent = result;
}