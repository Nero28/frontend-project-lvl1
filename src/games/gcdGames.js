import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const rule = 'Find the greatest common divisor of given numbers.';
const algorEvklid = (first, second) => {
  let result = 0;
  let value = 0;
  if (first >= second) {
    result = first % second;
    if (result === 0) {
      value = second;
      return value;
    }
    return algorEvklid(second, result);
  }
  if (first <= second) {
    result = second % first;
    if (result === 0) {
      value = first;
      return value;
    }
  }
  return algorEvklid(first, result);
};
const searchingGCD = () => {
  const num1 = getRandomNum(1, 47);
  const num2 = getRandomNum(1, 47);
  const numbers = `${num1} ${num2}`;
  const result = algorEvklid(num1, num2);
  return cons(numbers, result.toString());
};
const play = () => startGame(rule, searchingGCD);
export default play;
