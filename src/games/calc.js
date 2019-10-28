import { cons } from '@hexlet/pairs';
import startGame from '../core';
import { getRandomNum } from '../utils';

const description = 'What is the result of the expression?';

const operations = '+-*';
const calculate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return '';
  }
};

const getGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);
  const i = getRandomNum(0, operations.length - 1);
  const sign = operations[i];
  const question = `${number1} ${sign} ${number2}`;
  const answer = calculate(sign, number1, number2);
  return cons(question, answer.toString());
};

export default () => startGame(description, getGameData);
