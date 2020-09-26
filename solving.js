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

function findAllSets(cards) {
  // TODO start simple, refactor later
  const sets = [];
  const setsUniqueness = new Set();

  _.forEach(cards, (card) => {
    _.forEach(_.without(cards, card), (secondCard) => {
      const extrapolatedThird = extrapolateThird(card, secondCard);

      if (
        _.find(
          _.without(cards, card, secondCard), // search all _other_ cards, in case of duplicates
          (prospectiveThird) => extrapolatedThird.toString() === prospectiveThird.toString())
      ) {
        // the extapolated third exists in the board, this is a set, check if we've already returned it
        const potentiallyNewSet = Card.sortCards([card, secondCard, extrapolatedThird]);

        // create deterministic string representation of set to test uniqueness
        const sortedSetForUniqueness = _.join(_.map(potentiallyNewSet, (card) => card.toString()));

        if (!setsUniqueness.has(sortedSetForUniqueness)) {
          // set is new, add to result and setsUniqueness
          sets.push(potentiallyNewSet);
          setsUniqueness.add(sortedSetForUniqueness);
        }
      }
    });
  });

  return sets;
}

module.exports = {
  testSet,
  testAttribute,
  extrapolateThird,
  findAllSets,
};
