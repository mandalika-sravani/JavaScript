// Random Number Generator

const generateButton = document.getElementById("generateBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");
const label6 = document.getElementById("label6");
const min = 1;
const max = 6;
let ranNum1;
let ranNum2;
let ranNum3;
let ranNum4;
let ranNum5;
let ranNum6;

generateButton.onclick = function() {
    ranNum1 = Math.floor(Math.random() * max) + min;
    ranNum2 = Math.floor(Math.random() * max) + min;
    ranNum3 = Math.floor(Math.random() * max) + min;
    ranNum4 = Math.floor(Math.random() * max) + min;
    ranNum5 = Math.floor(Math.random() * max) + min;
    ranNum6 = Math.floor(Math.random() * max) + min;
    label1.textContent = ranNum1;
    label2.textContent = ranNum2;
    label3.textContent = ranNum3;
    label4.textContent = ranNum4;
    label5.textContent = ranNum5;
    label6.textContent = ranNum6;
}
