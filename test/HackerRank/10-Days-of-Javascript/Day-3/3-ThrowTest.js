var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-3/3-Throw');

describe('Day 3: Throws', function () {
    it('Throws', function () {
        expect(function () { app.isPositive(1) }).to.throw('YES');
        expect(function () { app.isPositive(0) }).to.throw('Zero Error');
        expect(function () { app.isPositive(-1) }).to.throw('Negative Error');
    })
});