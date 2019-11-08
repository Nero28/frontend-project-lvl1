import { cons } from '@hexlet/pairs';
import startGame from '../core';
import { getRandomNum } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (first, second) => {
  let remainder = 0;
  let result = 0;
  if (first >= second) {
    remainder = first % second;
    if (remainder === 0) {
      result = second;
      return result;
    }
    return getGcd(second, remainder);
  }
  if (first <= second) {
    remainder = second % first;
    if (remainder === 0) {
      result = first;
      return result;
    }
  }
  return getGcd(first, remainder);
};

const getGameData = () => {
  const number1 = getRandomNum(1, 47);
  const number2 = getRandomNum(1, 47);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return cons(question, answer.toString());
};

export default () => startGame(description, getGameData);
