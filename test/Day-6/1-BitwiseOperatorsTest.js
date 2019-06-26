var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-6/1-BitwiseOperators');

describe('Day 6: Bitwise Operators', function () {
    it('Bitwise Operators', function () {
        expect(app.getMaxLessThanK(8, 3)).to.be.equal(2);
    })
});