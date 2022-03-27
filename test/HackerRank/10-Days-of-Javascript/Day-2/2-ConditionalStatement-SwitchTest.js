var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-2/2-ConditionalStatement-Switch');

describe('Day 2: Conditional Statement', function () {
    it('ConditionalStatement : Switch', function () {
        expect(app.getLetter('adfgh')).to.be.equal('A');
        expect(app.getLetter('bcds')).to.be.equal('B');
        expect(app.getLetter('dfgh')).to.be.equal('B');
        expect(app.getLetter('hike')).to.be.equal('C');
        expect(app.getLetter('sam')).to.be.equal('D');
    })
});