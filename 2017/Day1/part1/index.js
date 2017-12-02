const fs = require('fs');
const solveCaptcha = require('./captcha')

new Promise((resolve, reject) => {
  fs.readFile('./input.txt', (err, data) => {
    if (err) reject(err);
    resolve(data.toString().trim());
  })
})
  .then(seq => {
    console.log(solveCaptcha(seq));
  })
  .catch(err => {
    console.log(err)
  });
