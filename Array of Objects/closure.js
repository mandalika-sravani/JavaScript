//closure -- function defined inside of another function, the inner function has access
//              to the variabled and scope for the outer function.

function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(8);
game.decreaseScore(6);

console.log(`The total score is ${game.getScore()}pts`);