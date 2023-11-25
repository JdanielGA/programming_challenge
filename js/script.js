//Rock, Paper and Scissors Game! - first challenge.

// Global game state
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

// Event listener for the form.
document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let gameResult = playRound(playerChoice(), computerPlay());
    displayResults(gameResult);
})

// Computer Choice.
let options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

// Player Choice.
function playerChoice() {
    let playerSelection = document.getElementById("choice").value;
    let chosenOption = playerSelection.toLowerCase();
    if (!['rock', 'paper', 'scissors'].includes(chosenOption)) {
        alert('The choice is not valid. Please try again.');
        return playerChoice();
    }
    else {
        return chosenOption;
    }
}

// Rules of the game.
const rules = {
    rock: { win: 'scissors', message: 'Rock beats Scissors, you win!' },
    paper: { win: 'rock', message: 'Paper beats Rock, you win!' },
    scissors: { win: 'paper', message: 'Scissors beats Paper, you win!' },
};

// Game mechanics.
function playRound(playerSelection, computerSelection) {
    let result = '';
    if (playerSelection === computerSelection) {
        result = 'You have chosen ' + playerSelection + ' and the computer has chosen ' + computerSelection + '. It\'s a tie!';
    }
    else if (rules[playerSelection].win === computerSelection) {
        playerScore++;
        result = 'You have chosen ' + playerSelection + ' and the computer has chosen ' + computerSelection + '. ' + rules[playerSelection].message;
    }
    else {
        computerScore++;
        result = 'You have chosen ' + playerSelection + ' and the computer has chosen ' + computerSelection + '. ' + computerSelection + ' beats ' + playerSelection + ', you lose!';
    }
    roundCounter++;
    return {result, playerScore, computerScore, roundCounter};
}

// Displaying the results.
function displayResults(gameResult) {
    let message = document.getElementById("message");
    let score = document.getElementById("score");
    let round = document.getElementById("round");
    message.innerHTML = gameResult.result;
    score.innerHTML = 'Player: ' + gameResult.playerScore + ' - Computer: ' + gameResult.computerScore;
    round.innerHTML = 'Round: ' + gameResult.roundCounter;
}