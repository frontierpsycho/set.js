const _ = require('lodash');

const ATTRIBUTES = {
  SHAPE: ['oval', 'diamond', 'squiggle'],
  COLOUR: ['red', 'purple', 'green'],
  NUMBER: ['one', 'two', 'three'],
  SHADING: ['solid', 'striped', 'outlined'],
};

/* TODO
export const SHAPE_VALUES = {
  OVAL: 'oval',
  DIAMOND: 'diamond',
  SQUIGGLE: 'squiggle'
};
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createRandomCard() {
  return new Card(
    ATTRIBUTES.NUMBER[getRandomInt(3)],
    ATTRIBUTES.SHADING[getRandomInt(3)],
    ATTRIBUTES.COLOUR[getRandomInt(3)],
    ATTRIBUTES.SHAPE[getRandomInt(3)],
  );
};

class Card {
  constructor(
    number,
    shading,
    colour,
    shape,
  ) {
    if (_.includes(ATTRIBUTES.SHAPE, shape)) {
      this.shape = shape;
    } else {
      throw new Error(`shape must be one of ${JSON.stringify(ATTRIBUTES.SHAPE)}`);
    }

    if (_.includes(ATTRIBUTES.COLOUR, colour)) {
      this.colour = colour;
    } else {
      throw new Error(`colour must be one of ${JSON.stringify(ATTRIBUTES.COLOUR)}`);
    }

    if (_.includes(ATTRIBUTES.NUMBER, number)) {
      this.number = number;
    } else {
      throw new Error(`number must be one of ${JSON.stringify(ATTRIBUTES.NUMBER)}`);
    }

    if (_.includes(ATTRIBUTES.SHADING, shading)) {
      this.shading = shading;
    } else {
      throw new Error(`shading must be one of ${JSON.stringify(ATTRIBUTES.SHADING)}`);
    }
  }

  toString() {
    let basicString = `${this.number} ${this.shading} ${this.colour} ${this.shape}`;
    if (this.number === ATTRIBUTES.NUMBER[1] || this.number === ATTRIBUTES.NUMBER[2]) {
      basicString += 's';
    }

    return basicString;
  }
}

module.exports = {
  Card,
  ATTRIBUTES,
  createRandomCard,
};
