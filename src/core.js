import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
const isRules = (rules) => {
  console.log(rules);
  console.log('');
};
const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};
export const getRandomNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};


export const startGame = (rule, game) => {
  greeting();
  isRules(rule);
  const name = requestName();
  console.log(`Hello, ${name}!`);
  console.log('');
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations , ${name}!`);
    }
    const foo = game();
    const question = car(foo);
    const userAnswer = getUserAnswer(question);
    const correctAnswer = cdr(foo);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${name}!`);
    return null;
  };
  iter(0);
};
