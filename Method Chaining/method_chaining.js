// Method Chaining -- calling one method after another in one continuous line of code


// -- No Method Chaining

let user = window.prompt("Enter your Username:");

user = user.trim();
let letter = user.charAt(0);
letter = letter.toUpperCase();

let extra = user.slice(1);
extra = extra.toLowerCase();
user = letter + extra;

console.log(user);

// Method Chaining

let userName = window.prompt("Enter your Username:");

userName = userName.trim().charAt(0).toUpperCase() +
                userName.trim().slice(1).toLowerCase();

console.log(userName);