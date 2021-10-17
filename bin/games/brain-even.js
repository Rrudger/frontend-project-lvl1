import game from '../../src/index.js';
import createNum from '../../src/createNum.js';

function makeQuestion() {
  const num = createNum(100);
  const rightAnwser = ((num % 2 === 0) ? 'yes' : 'no');
  return [num, rightAnwser];
}

const greetings = 'Answer "yes" if the number is even, otherwise answer "no".';

game(greetings, makeQuestion);
