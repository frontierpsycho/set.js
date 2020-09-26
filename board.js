const _ = require('lodash');

const {
  ATTRIBUTES,
  createRandomCard,
} = require('./set.js');

class Board {
  constructor(cards) {
    this.cards = cards;
  }

  // TODO this allows duplicates
  static createRandomBoard(size = 12) {
    return _.map(_.range(size), createRandomCard);
  }
}

module.exports = Board;
