module.exports = ss => ss.reduce(
  (total, row) => {
    for (i in row) {
      for (j in row) {
        if (j <= i) continue;

        if (row[i] % row[j] === 0) return total + (row[i] / row[j]);
        else if (row[j] % row[i] === 0) return total + (row[j] / row[i]);
      }
    }
  },
0)
