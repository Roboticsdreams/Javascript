var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-7/3-RegularExpressions-III');

describe('Day 7: Regular Expressions III', function () {
    const re = app.regexVar();
    it('Regular Expressions III', function () {
        let s = '102, 1948948 and 1.3 and 4.5';
        let arr = ['102', '1948948', '1', '3', '4', '5'];
        expect(s.match(re)).to.be.eql(arr);
    })
});