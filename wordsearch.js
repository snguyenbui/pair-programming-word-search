/**
 * Created in collaboration with Justin Anderson and Liuming F
 * @param {*} letters a matrix containing only letters
 * @param {*} word the word we are looking for in the matrix
 * @returns true if the word is found, false otherwise
 */
const wordSearch = (letters, word) => {
     
  let newArray = transpose(letters);
  let reverseArray = [];
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseJoin = reverseArray.map(ls => ls.join(''));
  const verticalJoin = newArray.map(ls => ls.join(''));

  for (let letter of letters) {
    reverseJoin.push(letter.reverse());
  }
  for (let r of reverseJoin) {
    if (r.includes(word)) return true;
  }
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let f of verticalJoin) {
    if (f.includes(word)) return true;
  }
  return false;
};

const transpose = matrix => {
  let newMatrix = [];
  for (let row in matrix[0]) {
    let newRow = [];
    for (let col in matrix) {
      newRow.push(matrix[col][row]);
    }
    newMatrix.push(newRow);
  }
  return (newMatrix);
};

module.exports = wordSearch;