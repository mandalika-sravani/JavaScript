//NUMBER GUESSING GAME without WHILE LOOP// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let running = true;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attemptsText");

submitBtn.onclick = function () {
  if (!running) return;

  const guess = Number(guessInput.value);

  if (isNaN(guess) || guessInput.value.trim() === "") {
    message.textContent = "Please enter a valid number";
  } else if (guess < minNum || guess > maxNum) {
    message.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
  } else {
    attempts++;
    if (guess < answer) {
      message.textContent = "TOO LOW! TRY AGAIN";
    } else if (guess > answer) {
      message.textContent = "TOO HIGH! TRY AGAIN";
    } else {
      message.textContent = `CORRECT! The answer was ${answer}.`;
      attemptsText.textContent = `It took you ${attempts} attempts`;
      running = false;
    }
  }

  guessInput.value = "";
  guessInput.focus();
};