module.exports = (pp) => {
  const ppWords = pp.split(/\s/);
  const found = {};
  let valid = true;
  for (word of ppWords) {
    if (!found[word]) found[word] = true;

    else {
      valid = false;
      break;
    }
  }

  return valid;
}
