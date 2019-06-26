var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-5/3-ArrowFunctions');

describe('Day 5: Arrow Functions', function () {
    it('Arrow Functions', function () {
        let a = [1, 2, 3, 4, 5];
        expect(app.modifyArray(a).toString().split(',').join(' ')).to.be.equal('3 4 9 8 15');
    })
});