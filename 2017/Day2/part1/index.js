const fs = require('fs');
const checksum = require('./checksum');

new Promise((resolve, reject) => {
  fs.readFile('./input.dat', (err, data) => {
    if (err) reject(err);
    resolve(
      data.toString().split(/\n/).map(row => {
        return row.split(/\t/)
      })
    );
  })
})
  .then(ss => {
    console.log(checksum(ss));
  })
  .catch(err => {
    console.log(err)
  });
