import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations , ${userName}!`);
      return;
    }
    const dataGame = getGameData();
    const question = car(dataGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(dataGame);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(counter + 1);
  };
  iter(0);
};
