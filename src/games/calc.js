import { cons, car, cdr } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';


const description = 'What is the result of the expression?';
const getRandomMathExpession = (first, second) => {
  let answer = 0;
  let question = '';
  let returnOperationSign = '';
  const operations = '+-*';
  const random = getRandomNum(0, operations.length - 1);
  switch (random) {
    case 0:
      answer = first + second;
      returnOperationSign = '+';
      break;
    case 1:
      answer = first - second;
      returnOperationSign = '-';
      break;
    default:
      answer = first * second;
      returnOperationSign = '*';
      break;
  }
  question = `${first} ${returnOperationSign} ${second}`;
  return cons(question, answer.toString());
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomNum(1, 100);
  const secondNumber = getRandomNum(1, 100);
  const result = getRandomMathExpession(firstNumber, secondNumber);
  const question = car(result);
  const answer = cdr(result);
  return cons(question, answer);
};

const play = () => startGame(description, getQuestionAnswer);
export default play;
