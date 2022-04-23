const wordSearch = (letters, word) => {
  let result = false;

  // reverse the word!
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (!word || !letters) {
    return result;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) || l.includes(reverseWord)) {
      result = true;
      return result;
    }
  }

  let checkVertical = letters[0].map((col, c) => letters.map((row, r) => letters[r][c]));

  const verticalJoin = checkVertical.map(ex => ex.join(''));
  for (let e of verticalJoin) {
    if (e.includes(word) || e.includes(reverseWord)) {
      return true;
    }
  }
    
  return result;
};


module.exports = wordSearch;






  