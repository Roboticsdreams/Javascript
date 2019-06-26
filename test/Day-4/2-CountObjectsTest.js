var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-4/2-CountObjects');

describe('Day 4: Count Objects', function () {
    var arr = [];
    arr[0] = { x: 1, y: 1 };
    arr[1] = { x: 1, y: 2 };
    arr[2] = { x: 3, y: 3 };
    arr[3] = { x: 1, y: 4 };
    arr[4] = { x: 1, y: 5 };

    it('Count Objects', function () {
        expect(app.getCount(arr)).to.be.equal(2);
    })
});