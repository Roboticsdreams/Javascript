var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-1/2-Functions');

describe('Day 1 : Functions', function() {
    it('Functions', function() {
        expect(app.factorial(4)).to.be.equal(24);
    })
});