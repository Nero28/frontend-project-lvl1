import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';


const description = 'What is the result of the expression?';

const getRandomMathExpession = () => {
  const rand = getRandomNum(1, 3);
  const first = getRandomNum(1, 100);
  const second = getRandomNum(1, 100);
  let answerGame = 0;
  let questionGame = '';
  switch (rand) {
    case 1:
      answerGame = first + second;
      questionGame = `${first} + ${second}`;
      break;
    case 2:
      answerGame = first - second;
      questionGame = `${first} - ${second}`;
      break;
    default:
      answerGame = first * second;
      questionGame = `${first} * ${second}`;
      break;
  }
  return cons(questionGame, answerGame.toString());
};
const play = () => startGame(description, getRandomMathExpession);
export default play;
