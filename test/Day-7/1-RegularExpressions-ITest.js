var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-7/1-RegularExpressions-I');

describe('Day 7: Regular Expressions I', function () {
    const re = app.regexVar();
    it('Regular Expressions I', function () {
        expect(re.test('abcda')).to.be.true;
        expect(re.test('abcd')).to.be.false;
    })
});