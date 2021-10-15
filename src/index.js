import readlineSync from 'readline-sync';
import helloFunc from './cli.js';

const game = (greetings, gameFunc) => {
  const userName = helloFunc();
  console.log(greetings);
  let count = 0;
  while (count < 3) {
    const [question, rightAnwser] = gameFunc();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === rightAnwser) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnwser}".\
      \nLet's try again, ${userName}!`);
      break;
    }
  }
  if (count === 3) console.log(`Congratulations, ${userName}!`);
};

export default game;
