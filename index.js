#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number
// User input for guessing number
// compare user input with computer generated number and show results
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1-10:",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed right Number");
}
else {
    console.log("Oops! You guessed the Wrong Number Please Try Again");
}
