import game from '../../src/index.js';
import createNum from '../../src/createNum.js';
import helloFunc from '../../src/cli.js';

const signs = ['+', '*', '-', '/'];
function makeQuestion() {
  const sign = signs[createNum(4)];
  let num1 = createNum(100);
  let num2 = createNum(100);
  if (sign === '/') {
    while ((num1 % num2 !== 0) || (num1 === 0) || (num2 === 0)) {
      num1 = createNum(100);
      num2 = createNum(100);
    }
  }
  if ((num1 < num2) && (sign === '-')) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  if (sign === '*') {
    num2 = createNum(10);
  }

  let rightAnwser = 0;
  switch (sign) {
    case '+':
      rightAnwser = num1 + num2;
      break;
    case '*':
      rightAnwser = num1 * num2;
      break;
    case '-':
      rightAnwser = num1 - num2;
      break;
    case '/':
      rightAnwser = num1 / num2;
      break;
    default:
      rightAnwser = 0;
  }
  return [`${num1} ${sign} ${num2}`, String(rightAnwser)];
}

const userName = helloFunc();
console.log('What is the result of the expression?');
game(userName, makeQuestion);
