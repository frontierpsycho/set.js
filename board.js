const _ = require('lodash');

const {
  ATTRIBUTES,
  createRandomCard,
} = require('./set.js');

class Board {
  constructor(board) {
    this.board = board;
  }

  static createRandomBoard(size = 12) {
    return _.map(_.range(size), createRandomCard);
  }
}

module.exports = Board;
