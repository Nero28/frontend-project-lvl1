import { cons } from '@hexlet/pairs';
import startGame from '../core';
import { getRandomNum } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNum(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer.toString());
};

export default () => startGame(description, getGameData);
