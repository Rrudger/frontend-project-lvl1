import game from '../../src/index.js';
import createNum from '../../src/createNum.js';
import helloFunc from '../../src/cli.js';

function makeQuestion() {
  let num = createNum(100);
  const sign = createNum(2);
  const step = createNum(50);
  const progressArr = [];
  progressArr.push(num);
  for (let i = 0; i < 9; i += 1) {
    if (sign) num += step;
    else num -= step;
    progressArr.push(num);
  }
  const rightIndex = createNum(10);
  const rightAnswer = progressArr[rightIndex];
  progressArr[rightIndex] = '..';
  return [progressArr, String(rightAnswer)];
}

const userName = helloFunc();
console.log('What number is missing in the progression?');
game(userName, makeQuestion);
