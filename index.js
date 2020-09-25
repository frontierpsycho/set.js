const _ = require('lodash');

const Board = require('./board.js');
const board = Board.createRandomBoard();

console.log(
  "Board:\n",
  _.join(_.map(board, (card) => card.toString()), ',\n '),
);
