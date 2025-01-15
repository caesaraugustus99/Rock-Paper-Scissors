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
    if (randomChoice === 1) {
        console.log('Your opponent chose rock!');
    } else if (randomChoice === 2) {
        console.log('Your opponent chose paper!');
    } else {
        console.log('Your opponent chose scissors!');
    }
}

let randomChoice = Math.floor(Math.random() * 3) + 1;

getComputerChoice();

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
    let inputChoice = prompt('Please choose rock, paper, or scissors.').toLowerCase();
    if (inputChoice == 'rock' || inputChoice == 'paper' || inputChoice == 'scissors') {
        console.log(`You chose ${inputChoice}`);
    } else {
        console.log('Invalid option, try again.');
        return getHumanChoice();
    }
}

getHumanChoice();