const checksum = require('./checksum');

const input = [
  [5, 9, 2, 8],
  [9, 4, 7, 3],
  [3, 8, 6, 5]
];

const output = 9;

const result = checksum(input);
console.log(result, result === output);
