import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
export const getRandomNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const startGame = (description, game) => {
  greeting();
  console.log(description);
  console.log('');
  const userName = requestName();
  console.log(`Hello, ${userName}!`);
  console.log('');
  const roundsCount = 3;
  const iter = (acc) => {
    if (acc === roundsCount) {
      console.log(`Congratulations , ${userName}!`);
      return true;
    }
    const foo = game();
    const question = car(foo);
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = cdr(foo);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Lets try again, ${userName}!`);
    return null;
  };
  iter(0);
};
