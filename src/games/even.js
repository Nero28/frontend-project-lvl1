import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  const isAnswer = number % 2 === 0 ? 'yes' : 'no';
  return isAnswer;
};
const defineEvenNumber = () => {
  const questionGame = getRandomNum(1, 100);
  const answerGame = isEven(questionGame);
  return cons(questionGame, answerGame);
};
const play = () => startGame(description, defineEvenNumber);
export default play;
