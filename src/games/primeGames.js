import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = () => {
  const rand = getRandomNum(1, 1000);
  const prime = (number) => {
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
  const realanswer = prime(rand);
  return cons(rand, realanswer.toString());
};
const play = () => startGame(rule, isPrime);
export default play;
