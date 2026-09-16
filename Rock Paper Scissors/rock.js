// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");

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

    switch(result) {
        case "YOU WIN!" :
            resultDisplay.classList.add("greenText");
            break;
        
        case "YOU LOSE!" :
            resultDisplay.classList.add("redText");
            break;
        
        case "IT'S A TIE!" :
            resultDisplay.classList.add("tieText");
            break;
    }
}
