// Pseudo Code
// --
// Prompt 1: Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
// 
// Create function for computer's choice.
// Generate an integer between 1 and 3.
// IF the integer is equal to 1 THEN
    // choose rock.
// ELSE IF the integer is equal to 2 THEN
    // choose paper.
// ELSE
    // choose scissors.

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        console.log('Your opponent chose rock!');
        return 'rock';
    } else if (computerChoice === 2) {
        console.log('Your opponent chose paper!');
        return 'paper';
    } else if (computerChoice === 3) {
        console.log('Your opponent chose scissors!');
        return 'scissors';
    }
}

//  Pseudo Code
// --
// Prompt 2: Your game will be played by a human player. You will write a function that takes the user choice and returns it.
// 
// Create function for human's choice.
// Prompt for human input.
// IF valid choice is selected THEN
    // Return valid choice.
// ELSE
    // User must try again.

function getHumanChoice() {
    let humanChoice = prompt('Please choose rock, paper, or scissors.').toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
        console.log(`You chose ${humanChoice}`);
        return humanChoice;
    } else {
        console.log('Invalid option, try again.');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

//  Pseudo Code
// --
// Prompt 3: Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
// 
// Create function for comparing each player's choice.
// IF player choice beats computer choice THEN
    // Increment player score by 1.
    // Display victory message.
// ELSE IF computer choice beats player choice THEN
    // Increment computer score by 1.
    // Display defeat message.
// ELSE
    // Display tie message.

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`computerChoice: ${computerChoice} humanChoice: ${humanChoice}`)
    
    if (humanChoice == computerChoice) {
        console.log('It\'s a tie!');
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {

        console.log(`${humanChoice} beats ${computerChoice}!`);
        humanScore++;

    } else {

        console.log(`${computerChoice} beats ${humanChoice}!`);
        computerScore++;

    }
}

playRound();

console.log(`Your score is ${humanScore}`);
console.log(`The computer's score is ${computerScore}`);