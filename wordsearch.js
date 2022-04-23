const wordSearch = (letters, word) => {
  let result = false;
  if (!word || !letters) {
    return result;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      result = true;
      return result;
    } else {
      result = false;
    }
  } 

  let checkVertical = letters[0].map((col, c) => letters.map((row, r) => letters[r][c]));

  const verticalJoin = checkVertical.map(ex => ex.join(''));
  for (let e of verticalJoin) {
    if (e.includes(word)) {
      return true;
    } else {
      result = false;
    }
  }
    
  return result;
};


module.exports = wordSearch;






  