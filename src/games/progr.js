import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'What number is missing in the progression?';
const returnArifmeticProgression = () => {
  let sequence = 0;
  const rand = getRandomNum(1, 10);
  const start = getRandomNum(1, 100);
  const step = rand;
  let result = start;
  let questionGame = '';
  let answerGame = 0;
  while (sequence < 10) {
    result += step;
    sequence += 1;
    if (rand === sequence) {
      questionGame = `${questionGame} .. `;
      answerGame = result;
    } else {
      questionGame = `${questionGame} ${start + step * sequence} `;
    }
  }
  return cons(questionGame, answerGame.toString());
};
const play = () => startGame(description, returnArifmeticProgression);
export default play;
