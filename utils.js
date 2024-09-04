import chalk from "chalk";
export const pause = (time) => {
  const timeAfterPause = Date.now() + time;
  while (Date.now() < timeAfterPause) {
    // wait
  }
  return;
};

export const giveHints = (value, input) => {
  if (input < value) {
    console.log(chalk.red.bold(`${input} is less than the number!`));
  } else if (input > value) {
    console.log(chalk.red.bold(`${input} is greater than the number!`));
  }
};

export const isHighScore = (prevScores, numOfGuesses) => {
  return prevScores.split("\n").every((score) => score > numOfGuesses);
};
