import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (first, second) => {
  let result = 0;
  let value = 0;
  if (first >= second) {
    result = first % second;
    if (result === 0) {
      value = second;
      return value;
    }
    return getGcd(second, result);
  }
  if (first <= second) {
    result = second % first;
    if (result === 0) {
      value = first;
      return value;
    }
  }
  return getGcd(first, result);
};
const getQuestionAnswer = () => {
  const firstNumber = getRandomNum(1, 47);
  const secondNumber = getRandomNum(1, 47);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber);
  return cons(question, answer.toString());
};
const play = () => startGame(description, getQuestionAnswer);
export default play;
