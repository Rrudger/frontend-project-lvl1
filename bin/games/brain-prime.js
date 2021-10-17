import game from '../../src/index.js';
import createNum from '../../src/createNum.js';

const makeQuestion = () => {
  const num = createNum(100);
  let rightAnwser = 'no';
  if (num > 1) {
    rightAnwser = 'yes';
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        rightAnwser = 'no';
        break;
      }
    }
  }
  return [num, rightAnwser];
};

const greetings = 'Answer "yes" if given number is prime. Otherwise answer "no".';
game(greetings, makeQuestion);
