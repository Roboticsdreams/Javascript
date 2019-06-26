var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-2/2-ConditionalStatement-Switch');

describe('Day 2: Conditional Statement', function () {
    it('ConditionalStatement : Switch', function () {
        expect(app.getLetter('adfgh')).to.be.equal('A');
    })
});