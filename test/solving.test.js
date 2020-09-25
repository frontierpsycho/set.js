const expect = require('chai').expect;

const { Card } = require('../set.js');
const { testAttribute, testSet, extrapolateThird } = require('../solving.js');

// TODO use a generator library to generate many valid inputs

describe('solving tools', () => {
  const cardSet1 = new Card('one', 'solid', 'purple', 'squiggle');
  const cardSet2 = new Card('one', 'striped', 'purple', 'oval');
  const cardSet3 = new Card('one', 'outlined', 'purple', 'diamond');

  describe('testAttribute', () => {
    const card1 = new Card('one', 'solid', 'red', 'squiggle');
    const card2 = new Card('one', 'striped', 'purple', 'squiggle');
    const card3 = new Card('one', 'outlined', 'purple', 'diamond');

    it('should return true when the attribute is the same on all cards', () => {
      expect(testAttribute(card1, card2, card3, 'number')).to.equal(true);
    });

    it('should return true when the attribute is different on all cards', () => {
      expect(testAttribute(card1, card2, card3, 'shading')).to.equal(true);
    });

    it('should return false when the attribute is the same in two cards', () => {
      expect(testAttribute(card1, card2, card3, 'colour')).to.equal(false);
      expect(testAttribute(card1, card2, card3, 'shape')).to.equal(false);
    });
  });

  describe('testSet', () => {
    const cardNoSet = new Card('two', 'solid', 'red', 'oval');

    it('should return true when given a set', () => {
      expect(testSet([cardSet1, cardSet2, cardSet3])).to.equal(true);
    });

    it('should return false when given a non-set', () => {
      expect(testSet([cardSet1, cardSet2, cardNoSet])).to.equal(false);
    });
  });

  describe('extrapolateThird', () => {
    it('should extrapolate a card in a set given the other two', () => {
      expect(extrapolateThird(cardSet1, cardSet2)).to.eql(cardSet3);
      expect(extrapolateThird(cardSet2, cardSet3)).to.eql(cardSet1);
      expect(extrapolateThird(cardSet1, cardSet3)).to.eql(cardSet2);
    });
  });
});
