import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const startGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const roundsCount = 3;
  const iter = (acc) => {
    if (acc === roundsCount) {
      console.log(`Congratulations , ${userName}!`);
      return;
    }
    const foo = game();
    const question = car(foo);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(foo);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(acc + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Lets try again, ${userName}!`);
  };
  iter(0);
};
