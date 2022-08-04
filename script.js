function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            
        results.textContent = "It's a tie!";
        player.textContent = `You: ${playerScore}`;
        computer.textContent = `Computer: ${computerScore}`;
         
    } else if (playerSelection === "rock" && computerSelection === "paper" 
        || playerSelection === "paper" && computerSelection === "scissors" 
        || playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        player.textContent = `You: ${playerScore}`;
        computer.textContent = `Computer: ${computerScore}`;
    
    } else {
        playerScore++;
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        player.textContent = `You: ${playerScore}`;
        computer.textContent = `Computer: ${computerScore}`;
    };

    if (playerScore === 5) {
        results.textContent = "You Win! Game Over!";
        playerScore = 0;
        computerScore = 0;
    };

    if (computerScore === 5) {
        results.textContent = "Computer Wins! Game Over!";
        playerScore = 0;
        computerScore = 0;
    };
};

const rock = document.querySelector('#rock'); 
const paper = document.querySelector('#paper'); 
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    } )
})


// rock.addEventListener('click', function () {
//     playRound('rock', getComputerChoice());
// });

// paper.addEventListener('click', function () {
//     playRound('paper', getComputerChoice());
// });

// scissors.addEventListener('click', function () {
//     playRound('scissors', getComputerChoice());
// });