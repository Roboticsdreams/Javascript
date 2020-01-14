var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-2/1-ConditionalStatement-IfElse');

describe('Day 2: Conditional Statement', function () {
    it('ConditionalStatement : If-Else', function () {
        expect(app.getGrade(11)).to.be.equal('D');
    })
});