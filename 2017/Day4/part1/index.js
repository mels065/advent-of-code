const fs = require('fs');
const passphrases = require('./passphrases');

new Promise((resolve, reject) => {
  fs.readFile('./input.dat', (err, data) => {
    if (err) reject(err);
    else resolve(
      data.toString().trim().split('\n')
    );
  });
})
  .then(pps => {
    let count = 0;
    pps.forEach(pp => {
      if (passphrases(pp)) count += 1;
    });
    console.log(count);
  })
  .catch(err => {
    console.log(err);
  })
