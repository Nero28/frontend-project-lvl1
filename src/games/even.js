import { cons } from '@hexlet/pairs';
import startGame from '../core';
import { isEven, getRandomNum } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => startGame(description, getGameData);
