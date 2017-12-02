const fs = require('fs');
const captcha = require('./captcha');

new Promise((resolve, reject) => {
  fs.readFile('./input.dat', (err, data) => {
    if (err) reject(err);
    else resolve(
      data.toString().trim()
    );
  })
})
  .then(seq => {
    console.log(captcha(seq));
  })
  .catch(err => {
    console.log(err);
  });
