const _ = require('lodash');

const ATTR_NAMES = ['number', 'shading', 'colour', 'shape'];

const ATTRIBUTES = {
  [ATTR_NAMES[0]]: ['one', 'two', 'three'],
  [ATTR_NAMES[1]]: ['solid', 'striped', 'outlined'],
  [ATTR_NAMES[2]]: ['red', 'purple', 'green'],
  [ATTR_NAMES[3]]: ['oval', 'diamond', 'squiggle'],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createRandomCard() {
  return new Card(
    ATTRIBUTES.number[getRandomInt(3)],
    ATTRIBUTES.shading[getRandomInt(3)],
    ATTRIBUTES.colour[getRandomInt(3)],
    ATTRIBUTES.shape[getRandomInt(3)],
  );
};

class Card {
  constructor(
    number,
    shading,
    colour,
    shape,
  ) {
    if (_.includes(ATTRIBUTES.shape, shape)) {
      this.shape = shape;
    } else {
      throw new Error(`shape must be one of ${JSON.stringify(ATTRIBUTES.SHAPE)}`);
    }

    if (_.includes(ATTRIBUTES.colour, colour)) {
      this.colour = colour;
    } else {
      throw new Error(`colour must be one of ${JSON.stringify(ATTRIBUTES.COLOUR)}`);
    }

    if (_.includes(ATTRIBUTES.number, number)) {
      this.number = number;
    } else {
      throw new Error(`number must be one of ${JSON.stringify(ATTRIBUTES.NUMBER)}`);
    }

    if (_.includes(ATTRIBUTES.shading, shading)) {
      this.shading = shading;
    } else {
      throw new Error(`shading must be one of ${JSON.stringify(ATTRIBUTES.SHADING)}`);
    }
  }

  toString() {
    let basicString = `${this.number} ${this.shading} ${this.colour} ${this.shape}`;
    if (this.number === ATTRIBUTES.number[1] || this.number === ATTRIBUTES.number[2]) {
      basicString += 's';
    }

    return basicString;
  }
}

module.exports = {
  ATTRIBUTES,
  ATTR_NAMES,
  Card,
  createRandomCard,
};
