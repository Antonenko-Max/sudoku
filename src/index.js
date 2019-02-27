const sudocu = require("./sudoku");

module.exports = function solveSudoku(matrix) {
  // your solution
  let result = [];
  let solved = sudocu(matrix);
  for (let i = 0; i < 9; i++)
  {
    result[i] = solved[i].map(ar => ar[0]);
  }
  return result;
} 

