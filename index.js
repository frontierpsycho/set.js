const _ = require('lodash');

const { Card, ATTRIBUTES, createRandomCard } = require('./set.js');
const Board = require('./board.js');

const board = Board.createRandomBoard(12);

console.log(
  "Board:\n",
  _.join(_.map(board, (card) => card.toString()), ',\n '),
);
