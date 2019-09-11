import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = () => {
  const num = getRandomNum(1, 100);
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return cons(num, rightAnswer);
};
const play = () => startGame(rule, isEven);
export default play;
