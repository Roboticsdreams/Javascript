var expect = require('chai').expect;
const Polygon = require('../../10-Days-of-Javascript/Day-4/3-Classes');

describe('Day 4: Classes', function () {
    const rectangle = new Polygon([10, 20, 10, 20]);
    const square = new Polygon([10, 10, 10, 10]);
    const pentagon = new Polygon([10, 20, 30, 40, 43]);
    it('Classes', function () {
        expect(rectangle.perimeter()).to.be.equal(60);
        expect(square.perimeter()).to.be.equal(40);
        expect(pentagon.perimeter()).to.be.equal(143);
    })
});