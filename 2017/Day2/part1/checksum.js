module.exports = function checksum(ss) {
  return ss.reduce((total, row) => {
    const max = Math.max(...row.map(Number));
    const min = Math.min(...row.map(Number));
    return total + (max - min);
  }, 0)
}
