const _ = require('lodash');

const { ATTRIBUTES, ATTR_NAMES } = require('./set.js');
const { Card } = require('./set.js');
const Board = require('./board.js');

function testSet(cards) {
  if (Array.isArray(cards) && cards.length !== 3) {
    return false;
  }

  const [card1, card2, card3] = cards;

  const foundAttributeThatFails = _.find(ATTR_NAMES, (attrName) => !testAttribute(card1, card2, card3, attrName));

  return foundAttributeThatFails === undefined;
};

function testAttribute(card1, card2, card3, attributeName) {
  const numberOfValues = new Set([card1[attributeName], card2[attributeName], card3[attributeName]]).size;

  return numberOfValues === 3 || numberOfValues === 1;
};

function extrapolateThird(card1, card2) {
  const cardObject =_.chain(ATTR_NAMES)
    .map((attrName) => {
      // card1's value
      const valueCard1 = card1[attrName];
      // card2's value
      const valueCard2 = card2[attrName];
      if (valueCard1 !== valueCard2) {
        // the cards have a different value, return the third one

        // the difference must have one value
        return [attrName, _.difference(ATTRIBUTES[attrName], [valueCard1, valueCard2])[0]];
      } else {
        // the cards have the same value, return that one
        return [attrName, valueCard1];
      }
    })
    .fromPairs()
    .value();

  return new Card(cardObject.number, cardObject.shading, cardObject.colour, cardObject.shape);
};

module.exports = {
  testSet,
  testAttribute,
  extrapolateThird,
};
