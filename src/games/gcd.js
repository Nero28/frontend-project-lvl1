import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'Find the greatest common divisor of given numbers.';
const definitionGcd = (first, second) => {
  let result = 0;
  let value = 0;
  if (first >= second) {
    result = first % second;
    if (result === 0) {
      value = second;
      return value;
    }
    return definitionGcd(second, result);
  }
  if (first <= second) {
    result = second % first;
    if (result === 0) {
      value = first;
      return value;
    }
  }
  return definitionGcd(first, result);
};
const getGcd = () => {
  const num1 = getRandomNum(1, 47);
  const num2 = getRandomNum(1, 47);
  const questionGame = `${num1} ${num2}`;
  const answerGame = definitionGcd(num1, num2);
  return cons(questionGame, answerGame.toString());
};
const play = () => startGame(description, getGcd);
export default play;
