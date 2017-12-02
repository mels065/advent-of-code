const captcha = require('./captcha');

const input = [
  '1212',
  '1221',
  '123425',
  '123123',
  '12131415'
];

const output = [
  6,
  0,
  4,
  12,
  4
];

for (let i in input) {
  let result = captcha(input[i]);
  console.log(result, result == output[i]);
}
