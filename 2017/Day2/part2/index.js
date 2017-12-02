const fs = require('fs');
const checksum = require('./checksum');

new Promise((resolve, reject) => {
  fs.readFile('./input.dat', (err, data) => {
    if (err) reject(err);
    else resolve(
      data.toString().trim().split(/\n/).map(row => row.split(/\t/).map(Number))
    );
  })
})
  .then(ss => {
    console.log(checksum(ss));
  })
  .catch(err => {
    console.log(err);
  });
