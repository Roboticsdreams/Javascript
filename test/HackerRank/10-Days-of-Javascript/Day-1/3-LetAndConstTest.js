var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-1/3-LetAndConst');

describe('Day 1 : Let and Const', function() {
    it('Let and Const', function() {
        expect(app.area(2.6)).to.be.equal(21.237166338267002);
        expect(app.perimeter(2.6)).to.be.equal(16.336281798666924);
    })
});