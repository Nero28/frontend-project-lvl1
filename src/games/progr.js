import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../core';
import { getRandomNum } from '../utils';

const description = 'What number is missing in the progression?';
const indexMissedNumber = getRandomNum(1, 10);
const getSequence = (length, stepSequence, startElement) => {
  let sequence = '';
  for (let i = 0; i < length; i += 1) {
    const nextElement = i === indexMissedNumber ? '.. ' : `${startElement + i * stepSequence} `;
    sequence = `${sequence}${nextElement}`;
  }
  const question = sequence;
  const answer = startElement + indexMissedNumber * stepSequence;
  return cons(question, answer.toString());
};

const getGameData = () => {
  const length = 10;
  const stepSequence = getRandomNum(1, 10);
  const startElement = getRandomNum(1, 100);
  const result = getSequence(length, stepSequence, startElement);
  const question = car(result);
  const answer = cdr(result);
  return cons(question, answer);
};
export default () => startGame(description, getGameData);
