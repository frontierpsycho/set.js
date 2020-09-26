const _ = require('lodash');

const { Card } = require('./set.js');
const Board = require('./board.js');
const cards = Board.createRandomBoard();
const { findAllSets } = require('./solving.js');

console.log(
  "Board:\n",
  _.join(_.map(Card.sortCards(cards), (card) => card.toString()), ',\n '),
);

console.log("Sets in board:\n", _.join(findAllSets(cards), "\n\n "));
