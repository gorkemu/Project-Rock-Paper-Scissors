const buttons = document.querySelectorAll('button');
const resultsTop = document.querySelector('#results-top');
const resultsBottom = document.querySelector('#results-bottom');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    } )
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultsTop.textContent = "It's a tie!";
        resultsBottom.textContent = `${computerSelection} - ${playerSelection}`;
         
    } else if (playerSelection === "Rock" && computerSelection === "Paper" 
        || playerSelection === "Paper" && computerSelection === "Scissors" 
        || playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        resultsTop.textContent = "You Lose!" ;
        resultsBottom.textContent = `${computerSelection} beats ${playerSelection}`;

    } else {
        playerScore++;
        resultsTop.textContent = "You Win!"
        resultsBottom.textContent = `${playerSelection} beats ${computerSelection}`;
    };

    player.textContent = `You: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameOver();
    }
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
};

function gameOver() {
    resultsTop.textContent = "Game Over!"
    resultsBottom.textContent = `${playerScore} - ${computerScore}`;
    resetScore();
};

function resetScore() {
    playerScore = 0;
    computerScore = 0;
};