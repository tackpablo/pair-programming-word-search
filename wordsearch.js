const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const newLetters = transpose(letters);
  const verticalJoin = newLetters.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function (matrix) {
  let newSquare = generateSquare(matrix);
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      newSquare[y].push(matrix[x][y]);
    }
  }
  return newSquare;
};

const generateSquare = (matrix) => {
  let generatedSquare = [];
  for (let i = 0; i < matrix[0].length; i++) {
    generatedSquare.push([]);
  }
  return generatedSquare;
};

const result = wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);

const resultTranspose = wordSearch(
  [
    ["F", "W", "C", "F", "Q", "U", "A", "L"],
    ["R", "E", "I", "N", "F", "E", "L", "D"],
    ["A", "F", "C", "F", "Q", "U", "A", "L"],
    ["N", "M", "J", "T", "E", "V", "R", "G"],
    ["K", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);

console.log(result);
console.log(resultTranspose);

module.exports = wordSearch;
