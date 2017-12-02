module.exports = function solveCaptcha(seq) {
  return seq.split('').reduce((currentSum, currentDigit, i) => {
    if (currentDigit === seq[(i+1) % seq.length])
      return currentSum + Number(currentDigit)
    return currentSum
  }, 0);
}
