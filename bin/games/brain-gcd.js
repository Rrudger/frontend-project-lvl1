#!/usr/bin/env node
import game from '../../src/index.js';
import createNum from '../../src/createNum.js';

function findGcd(a, b) {
  if (b === 0) return a;
  return findGcd(b, a % b);
}

function makeQuestion() {
  const num1 = createNum(100);
  const num2 = createNum(100);
  return [`${num1} ${num2}`, String(findGcd(Math.abs(num1), Math.abs(num2)))];
}

const greetings = 'Find the greatest common divisor of given numbers.';
game(greetings, makeQuestion);
