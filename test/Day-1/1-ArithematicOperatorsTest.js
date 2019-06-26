var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-1/1-ArithematicOperators');

describe('Day 1 : Arithematic Operators', function() {
    it('Arithematic Operations', function() {
        expect(app.getArea(3,4.5)).to.be.equal(13.5);
        expect(app.getPerimeter(3,4.5)).to.be.equal(15);
    })
});