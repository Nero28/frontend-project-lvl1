import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
export const questEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
};
export const questCalc = () => {
  console.log('What is the result of the expression?');
  console.log('');
};
export const questGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
};
export const questProgr = () => {
  console.log('What number is missing in the progression?');
  console.log('');
};
export const questPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
  const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  const question = () => {
    const rand = random(1, 3);
    const randomMathExp = (first, second) => {
      const sum = (a, b) => a + b;
      const diff = (a, b) => a - b;
      const multi = (a, b) => a * b;
      let result = 0;
      if (rand === 1) {
        result = sum(first, second);
      } else if (rand === 2) {
        result = diff(first, second);
      } else if (rand === 3) {
        result = multi(first, second);
      }
      return result;
    };
    const retString = (first, second) => {
      let strResult = '';
      if (rand === 1) {
        strResult = `${first} + ${second}`;
      } else if (rand === 2) {
        strResult = `${first} - ${second}`;
      } else if (rand === 3) {
        strResult = `${first} * ${second}`;
      }
      return strResult;
    };
    const returnTripleСheck = (realanswer, useranswer) => {
      if (Number(realanswer) === Number(useranswer)) {
        while (current < 3) {
          current += 1;
          console.log('Correct!');
          return question();
        }
        console.log(`Congratulations , ${name}!`);
      } else {
        return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${realanswer}'.Let's try again, ${name}!`);
      }
      return false;
    };
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${retString(num1, num2)}`);
    const answer = readlineSync.question('Your answer: ');
    returnTripleСheck(randomMathExp(num1, num2), answer);
  };
  question();
};

export const gcd = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let current = 1;
  const question = () => {
  // три раунда
    const returnTripleСheck = (realanswer, useranswer) => {
      if (Number(realanswer) === Number(useranswer)) {
        while (current < 3) {
          current += 1;
          console.log('Correct!');
          return question();
        }
        console.log(`Congratulations , ${name}!`);
      } else {
        return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${realanswer}'.Let's try again, ${name}!`);
      }
      return false;
    };
    // поиск НОД
    const searchGcd = (first, second) => {
      let result = 0;
      let value = 0;
      if (first >= second) {
        result = first % second;
        if (result === 0) {
          value = second;
          return value;
        }
        return searchGcd(second, result);
      }
      if (first <= second) {
        result = second % first;
        if (result === 0) {
          value = first;
          return value;
        }
      }
      return searchGcd(first, result);
    };
    const num1 = Math.floor(Math.random() * 47);
    const num2 = Math.floor(Math.random() * 47);
    console.log(`Question: ${num1} ${num2}`);
    const decision = searchGcd(num1, num2);
    // console.log(decision);
    const answer = readlineSync.question('Your answer: ');
    returnTripleСheck(decision, answer);
  };
  question();
};


export const arifmProgr = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let current = 1;

  const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  const question = () => {
    let sequence = 0;
    const rand = random(1, 10);
    const start = Math.floor(Math.random() * 100);
    const step = rand;
    let result = start;
    let strResult = '';
    let num = 0;
    const returnSeq = () => {
      while (sequence < 10) {
        result += step;
        sequence += 1;
        if (rand === sequence) {
          strResult = `${strResult} .. `;
          num = result;
        } else {
          strResult = `${strResult} ${start + step * sequence} `;
        }
      }
      return cons(strResult, num);
    };
    const returnTripleСheck = (realanswer, useranswer) => {
      if (Number(realanswer) === Number(useranswer)) {
        while (current < 3) {
          current += 1;
          console.log('Correct!');
          return question();
        }
        console.log(`Congratulations , ${name}!`);
      } else {
        return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${realanswer}'.Let's try again, ${name}!`);
      }
      return false;
    };
    const expression = car(returnSeq());
    const realanswer = cdr(returnSeq());
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    returnTripleСheck(realanswer, answer);
  };
  question();
};

export const isPrime = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let current = 1;
  const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };
  const question = () => {
    const rand = random(1, 1000);
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
    const returnTripleСheck = (realanswer, useranswer) => {
      if (realanswer === useranswer) {
        while (current < 3) {
          current += 1;
          console.log('Correct!');
          return question();
        }
        console.log(`Congratulations , ${name}!`);
      } else {
        return console.log(`'${useranswer}' is wrong answer ;(. Correct answer was '${realanswer}'.Let's try again, ${name}!`);
      }
      return false;
    };
    console.log(`Question: ${rand}`);
    const realanswer = prime(rand);
    const answer = readlineSync.question('Your answer: ');
    returnTripleСheck(realanswer, answer);
  };
  question();
};
