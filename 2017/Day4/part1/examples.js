const passphrases = require('./passphrases');

const input = [
  'aa bb cc dd ee',
  'aa bb cc dd aa',
  'aa bb cc dd aaa'
];

const output = [
  true,
  false,
  true
];

input.forEach((word, i) => {
  const result = passphrases(word);
  console.log(result, result === output[i])
})
