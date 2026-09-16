// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScoreDisplay");
const compScore = document.getElementById("compScoreDisplay");
let playScore = 0;
let comScore = 0;


function playGame(playerChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === compChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice) {
            case "Rock" :
                result = (compChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "Paper" :
                result = (compChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
            case "Scissors" :
                result = (compChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    compDisplay.textContent = `COMPUTER: ${compChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "YOU WIN!" :
            resultDisplay.classList.add("greenText");
            playScore++;
            playerScore.textContent = playScore;
            break;
        
        case "YOU LOSE!" :
            resultDisplay.classList.add("redText");
            comScore++;
            compScore.textContent = comScore;
            break;
        
        case "IT'S A TIE!" :
            resultDisplay.classList.add("tieText");
            break;
    }
}
