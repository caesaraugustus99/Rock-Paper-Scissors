console.log('Hello World!')

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
// ELSE if the integer is equal to 3 THEN
    // choose scissors.

function getComputerChoice() {
    if (randomChoice === 1) {
        console.log('Rock!');
    } else if (randomChoice === 2) {
        console.log('Paper!');
    } else {
        console.log('Scissors!');;
    }
}

let randomChoice = Math.floor(Math.random() * 3) + 1;

getComputerChoice();