import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAnswer = () => {
  const question = getRandomNum(1, 1000);
  const answer = isPrime(question);
  return cons(question, answer.toString());
};
const play = () => startGame(description, getQuestionAnswer);
export default play;
