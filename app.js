import { input } from "@inquirer/prompts";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
const pause = (time) => {
  const timeAfterPause = Date.now() + time;
  while (Date.now() < timeAfterPause) {
    // wait
  }
  return;
};
const giveHints = (value, input) => {
  if (input < value) {
    console.log(chalk.red.bold(`${input} is less than the number!`));
  } else if (input > value) {
    console.log(chalk.red.bold(`${input} is greater than the number!`));
  }
};
const welcomeMessage = "Welcome to the number guessing game!!! \n";
const instructions =
  "To play please input a number between 1 and 100 inclusive \n";
const secretNum = Math.ceil(Math.random() * 100);
const winningMessage = `You win!!! this session's number was ${secretNum} \n`;
let guess;
let numOfGuesses = 0;
const stats = `Number of guesses: ${numOfGuesses}`;

const playGame = async () => {
  console.log(chalk.greenBright.bold(welcomeMessage));
  pause(1000);
  console.log(chalk.greenBright.bold(instructions));
  pause(1000);
  while (guess !== secretNum) {
    const answer = await input({ message: chalk.blue.bold("Your number:") });
    console.log("\n");
    if (typeof Number(answer) === "number") {
      guess = Number(answer);
      numOfGuesses++;
    }
    giveHints(secretNum, guess);
  }
  chalkAnimation.rainbow(winningMessage, 1).start();
  pause(500);
  console.log(stats);
  pause(3000);
};

playGame();
