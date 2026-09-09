// Counter Program

const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const incrementButton = document.getElementById('increment');
const countLabel = document.getElementById('countLabel');

let count = 0;

incrementButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decrementButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
