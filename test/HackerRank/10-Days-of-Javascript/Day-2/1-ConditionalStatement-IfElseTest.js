var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-2/1-ConditionalStatement-IfElse');

describe('Day 2: Conditional Statement', function () {
    it('ConditionalStatement : If-Else', function () {
        expect(app.getGrade(27)).to.be.equal('A');
        expect(app.getGrade(23)).to.be.equal('B');
        expect(app.getGrade(18)).to.be.equal('C');
        expect(app.getGrade(11)).to.be.equal('D');
        expect(app.getGrade(8)).to.be.equal('E');
        expect(app.getGrade(5)).to.be.equal('F');
    });
});