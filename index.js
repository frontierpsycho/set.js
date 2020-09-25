const _ = require('lodash');

const { Card, ATTRIBUTES, createRandomCard } = require('./set.js');

const board = _.map(_.range(12), createRandomCard);

console.log(
  "Board:\n",
  _.join(_.map(board, (card) => card.toString()), ',\n '),
);
