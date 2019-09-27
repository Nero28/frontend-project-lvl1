import { cons, car, cdr } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'What number is missing in the progression?';
const returnArifmeticProgression = (stepLength, sequenceStart) => {
  const step = stepLength;
  let result = sequenceStart;
  let question = '';
  let answer = 0;
  for (let sequence = 0; sequence < 10; sequence += 1) {
    if (stepLength === sequence) {
      question = `${question} ..`;
      answer = result;
    } else {
      question = `${question} ${sequenceStart + step * sequence}`;
    }
    result += step;
  }
  return cons(question, answer.toString());
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 100);
  const result = returnArifmeticProgression(firstNumber, secondNumber);
  const question = car(result);
  const answer = cdr(result);
  return cons(question, answer);
};
const play = () => startGame(description, getQuestionAnswer);
export default play;
