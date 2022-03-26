var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-3/1-Arrays');

describe('Day 3: Arrays', function () {
    it('Arrays', function () {
        expect(app.getSecondLargest([1, 2, 4, 5, 6, 7, 9, 10])).to.be.equal(9);
        expect(app.getSecondLargest([10, 9, 8, 7, 6])).to.be.equal(9);
    })
});