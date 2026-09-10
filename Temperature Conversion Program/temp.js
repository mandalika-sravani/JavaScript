// TEMPERATURE CONVERSION

const textbox = document.getElementById("textbox");
const toFahren = document.getElementById("toFahren");
const toCel = document.getElementById("toCel");
const button = document.getElementById("button");
const result = document.getElementById("result");
let temp;


function convert() {
    temp = Number(textbox.value);

    if(toFahren.checked) {
       // result.textContent = "You selected to Fahrenheit";
       temp = temp * 9 / 5 + 32;
       result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCel.checked) {
        //result.textContent = "You selected to Celsius";
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}