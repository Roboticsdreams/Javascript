var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-3/2-TryCatchandFinally');

describe('Day 3: Try Catch and Finally', function () {
    it('Try Catch and Finally', function () {
        expect(app.reverseString('1234')).to.be.equal('4321');
    });
});