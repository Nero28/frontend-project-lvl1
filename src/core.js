import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
export const questEven = () => {
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

export const calc = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let current = 1;
  const question = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const random = (min, max) => {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
    const rand = random(1, 3);
    const sum = (a, b) => a + b;
    const diff = (a, b) => a - b;
    const multi = (a, b) => a * b;
    let result = 0;
    let strResult = '';
    if (rand === 1) {
      result = sum(num1, num2);
      strResult = `${num1} + ${num2}`;
    } else if (rand === 2) {
      result = diff(num1, num2);
      strResult = `${num1} - ${num2}`;
    } else if (rand === 3) {
      result = multi(num1, num2);
      strResult = `${num1} * ${num2}`;
    }
    console.log(`Question: ${strResult}`);
    const answer = readlineSync.question('Your answer: ');
    if (result == answer) {
      while (current < 3) {
        current += 1;
        console.log('Correct!');
        return question();
      }
      console.log(`Congratulations , ${name}!`);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.Let's try again, ${name}!`);
    }
    return false;
  };
  question();
};
