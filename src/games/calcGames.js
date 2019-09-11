import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';


const rule = 'What is the result of the expression?';
const rand = getRandomNum(1, 3);
const randomMathExpession = () => {
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);
  const sum = (a, b) => a + b;
  const diff = (a, b) => a - b;
  const multi = (a, b) => a * b;
  let result = 0;
  let strResult = '';
  if (rand === 1) {
    result = sum(first, second);
    strResult = `${first} + ${second}`;
  } else if (rand === 2) {
    result = diff(first, second);
    strResult = `${first} - ${second}`;
  } else if (rand === 3) {
    result = multi(first, second);
    strResult = `${first} * ${second}`;
  }
  return cons(strResult, result.toString());
};
const play = () => startGame(rule, randomMathExpession);
export default play;
