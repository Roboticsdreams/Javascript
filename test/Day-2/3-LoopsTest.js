var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-2/3-Loops');

describe('Day 2: Loops', function () {
    it('Loops', function () {
        expect(app.vowelsAndConsonants('javascript')).to.be.equal('aaijvscrpt');
    })
});