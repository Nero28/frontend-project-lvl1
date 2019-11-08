import { cons } from '@hexlet/pairs';
import startGame from '../core';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';
const length = 10;

const getGameData = () => {
  const missedElementIndex = getRandomNum(0, length - 1);
  const stepSequence = getRandomNum(1, 10);
  const startElement = getRandomNum(1, 100);
  let sequence = '';
  for (let i = 0; i < length; i += 1) {
    const nextElement = i === missedElementIndex ? '.. ' : `${startElement + i * stepSequence} `;
    sequence = `${sequence}${nextElement}`;
  }
  const question = sequence;
  const answer = startElement + missedElementIndex * stepSequence;
  return cons(question.trim(), answer.toString());
};

export default () => startGame(description, getGameData);
