import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const rule = 'What number is missing in the progression?';
const returnArifmProgr = () => {
  let sequence = 0;
  const rand = getRandomNum(1, 10);
  const start = getRandomNum(1, 100);
  const step = rand;
  let result = start;
  let strResult = '';
  let num = 0;
  while (sequence < 10) {
    result += step;
    sequence += 1;
    if (rand === sequence) {
      strResult = `${strResult} .. `;
      num = result;
    } else {
      strResult = `${strResult} ${start + step * sequence} `;
    }
  }
  return cons(strResult, num.toString());
};
const play = () => startGame(rule, returnArifmProgr);
export default play;
