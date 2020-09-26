const expect = require('chai').expect;

const { Card } = require('../set.js');

describe('Card', () => {
  describe('sortCards', () => {
    it('should sort a card with two after a card with one', () => {
      expect(
        Card.sortCards(
          [
            new Card('two', 'solid', 'purple', 'diamond'),
            new Card('one', 'solid', 'purple', 'diamond'),
          ]
        )[0].number
      ).to.equal('one');

      // try both initial orders
      expect(
        Card.sortCards(
          [
            new Card('one', 'solid', 'purple', 'diamond'),
            new Card('two', 'solid', 'purple', 'diamond'),
          ]
        )[0].number
      ).to.equal('one');
    });

    it('should sort cards in order of attributes', () => {
      // this card is first in number but last in the rest
      const card1 = new Card('one', 'outlined', 'green', 'squiggle');
      // this card is second in number but first in the rest
      const card2 = new Card('two', 'solid', 'red', 'oval');
      // this card is second in all attributes
      const card3 = new Card('two', 'striped', 'purple', 'diamond');

      // the order is: card1, card2, card3

      let sorted = Card.sortCards([card2, card1, card3]);

      expect(sorted[0].toString()).to.equal(card1.toString());
      expect(sorted[1].toString()).to.equal(card2.toString());
      expect(sorted[2].toString()).to.equal(card3.toString());

      // try another initial order
      sorted = Card.sortCards([card1, card3, card2]);

      expect(sorted[0].toString()).to.equal(card1.toString());
      expect(sorted[1].toString()).to.equal(card2.toString());
      expect(sorted[2].toString()).to.equal(card3.toString());
    });
  });
});
