var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-4/1-CreateaRectangleObject');

describe('Day 4: Create a Rectangle Object', function () {
    const rec = app.Rectangle(4, 5);
    it('Object', function () {
        expect(rec.length).to.be.equal(4);
        expect(rec.width).to.be.equal(5);
        expect(rec.perimeter).to.be.equal(18);
        expect(rec.area).to.be.equal(20);
    })
});