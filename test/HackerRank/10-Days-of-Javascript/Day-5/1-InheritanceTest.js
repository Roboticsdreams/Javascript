var expect = require('chai').expect;
const Rectangle = require('../../../../HackerRank/10-Days-of-Javascript/Day-5/1-Inheritance').Rectangle;
const Square = require('../../../../HackerRank/10-Days-of-Javascript/Day-5/1-Inheritance').Square;

describe('Day 5: Inheritance', function () {
    const rectangle = new Rectangle(3, 4)
    const square = new Square(3);

    it('Inheritance', function () {
        expect(rectangle.area()).to.be.equal(12);
        expect(square.area()).to.be.equal(9);
    })
});