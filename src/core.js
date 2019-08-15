import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
};
export const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let current = 1;
  const question = () => {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    const even = (random % 2 === 0 && answer === 'yes');
    const noeven = (random % 2 !== 0 && answer === 'no');
    if (even || noeven) {
      while (current < 3) {
        console.log('Correct!');
        current += 1;
        return question();
      }
      console.log(`Congratulations , ${name}!`);
    } else if (random % 2 !== 0 && answer === 'yes') {
      console.log(`yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}!`);
    } else if (random % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${name}!`);
    } return false;
  };
  question();
};
