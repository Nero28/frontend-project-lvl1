import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../core';
import { getRandomNum } from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;
const generateSequenceWithMissedElement = (length, stepSequence, startElement) => {
  const missedElementIndex = getRandomNum(0, length - 1);
  let sequence = '';
  for (let i = 0; i < length; i += 1) {
    const nextElement = i === missedElementIndex ? ' ..' : ` ${startElement + i * stepSequence}`;
    sequence = `${sequence}${nextElement}`;
  }
  const question = sequence;
  const answer = startElement + missedElementIndex * stepSequence;
  return cons(question, answer.toString());
};

const getGameData = () => {
  const stepSequence = getRandomNum(1, 10);
  const startElement = getRandomNum(1, 100);
  const result = generateSequenceWithMissedElement(length, stepSequence, startElement);
  const question = car(result);
  const answer = cdr(result);
  return cons(question, answer);
};
export default () => startGame(description, getGameData);
