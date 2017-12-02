module.exports = seq =>
  seq.split('').reduce((total, currentDigit, i) =>
    currentDigit == seq[(i + (seq.length / 2)) % seq.length] ?
      total + Number(currentDigit) :
      total,
  0);
