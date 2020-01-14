var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-7/2-RegularExpressions-II');

describe('Day 7: Regular Expressions II', function () {
    const re = app.regexVar();
    it('Regular Expressions II', function () {
        expect(re.test('Mrs.Y')).to.be.true;
        expect(re.test('Dr#Joseph')).to.be.false;
        expect(re.test('Er .Abc')).to.be.false;
    })
});