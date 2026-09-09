//How to give user inputs in JavaScript?
//Easy way --- window prompt
// Professional way --- HTML textbox and button

// Example of using window.prompt to get user input
let username;

//username = window.prompt("Please enter your name:"); // This will show a prompt dialog to the user

//console.log(username); // This will log the entered username to the console

// Example of using HTML textbox and button to get user input

document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("username").value;
    document.getElementById("myh1").textContent = `Hello, ${username}!`;// This will display the entered username in the h1 element
}