import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';


const description = 'What is the result of the expression?';
const getRandomMathExpession = () => {
  let answerGame = 0;
  let questionGame = '';
  const sum = (num1, num2) => (num1 + num2);
  const diff = (num1, num2) => (num1 - num2);
  const multi = (num1, num2) => (num1 * num2);
  const operationsList = '+-*';
  const random = getRandomNum(0, operationsList.length - 1);
  const first = getRandomNum(1, 100);
  const second = getRandomNum(1, 100);
  switch (random) {
    case 0:
      answerGame = sum(first, second);
      questionGame = `${first} + ${second}`;
      break;
    case 1:
      answerGame = diff(first, second);
      questionGame = `${first} - ${second}`;
      break;
    default:
      answerGame = multi(first, second);
      questionGame = `${first} * ${second}`;
      break;
  }
  return cons(questionGame, answerGame.toString());
};
const play = () => startGame(description, getRandomMathExpession);
export default play;
