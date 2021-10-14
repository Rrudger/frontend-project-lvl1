import readlineSync from 'readline-sync';
import helloFunc from '../src/cli.js';

const userName = helloFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;
while (count < 3) {
  const num = Math.floor(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
  if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
    console.log('Correct!');
    count += 1;
  } else {
    const rightAnwser = ((num % 2 === 0) ? 'yes' : 'no');
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnwser}".\
    \nLet's try again, ${userName}!`);
    break;
  }
}
if (count === 3) console.log(`Congratulations, ${userName}!`);
