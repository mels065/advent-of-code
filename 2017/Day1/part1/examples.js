const solveCaptcha = require('./captcha');

const inputs = [
  '1122',
  '1111',
  '1234',
  '91212129',
  '20202202',
  '56783362177',
  '5555555555'
];

const expected = [
  3,
  4,
  0,
  9,
  4,
  10,
  50
];

for (let i in inputs) {
  console.log(solveCaptcha(inputs[i]) === expected[i])
}
