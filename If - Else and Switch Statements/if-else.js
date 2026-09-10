// If -Else Statement -- if a condition is true, then execute some code,
//                       if not then execute some other code

const myAge = document.getElementById("myInput");
const submit = document.getElementById("myButton");
const result = document.getElementById("result");

let age;

submit.onclick = function() {

    age = myAge.value;
    age = Number(age); // Convert the input value to a number

    if(age >= 100) {
        result.textContent = "You are TOO OLD to enter this site!";
    } 
    else if(age == 0) {
        result.textContent = "You can't enter. You were just born!";
    }
    else if(age >= 18) {
        result.textContent = "You are old enough to enter this site!";
    }
    else if (age < 0) {
        result.textContent = "Your age can't be below 0!";
    }
    else {
        result.textContent = "You must be 18+ to enter this site!";
    }

}
    