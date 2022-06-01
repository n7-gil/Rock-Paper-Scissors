console.log("Test output"); // this line is here just to ensure that the JS was linked properly

// ## Instructions
// The completed application should meet the following criteria:

// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.
// * As a user, I expect the computer to choose R, P, or S in return. The computer's selection must be random to ensure a fair game.
var playerChoice = ["rock", "paper", "scissors"];

var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = playerChoice[randomNumber];

console.log(randomNumber);
console.log(computerChoice);
alert(computerChoice);
// * As a user, I want the option to play again whether I win or lose.

// * As a user, I want to see my total wins, ties, and losses after each round.

// ### Specifications

// * Must use the `alert()`, `confirm()`, and `prompt()` methods to collect user input and display information to the user.
