const checksum = require('./checksum');

const input = [
  [5, 1, 9, 5],
  [7, 5, 3],
  [2, 4, 6, 8]
];

const output = 18;

console.log(checksum(input) == output);
