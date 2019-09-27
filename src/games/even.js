import { cons } from '@hexlet/pairs';
import { startGame, getRandomNum } from '../core';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => !(number % 2);

const getQuestionAnswer = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
const play = () => startGame(description, getQuestionAnswer);
export default play;
