import game from '../../src/index.js';
import createNum from '../../src/createNum.js';
import helloFunc from '../../src/cli.js';

function doQuestion() {
  const num = createNum(100);
  const rightAnwser = ((num % 2 === 0) ? 'yes' : 'no');
  return [num, rightAnwser];
}

const userName = helloFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

game(userName, doQuestion);
