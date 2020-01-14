var expect = require('chai').expect;
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-6/2-JavascriptDates');

describe('Day 6: Javascript Dates', function () {
    it('Javascript Dates', function () {
        expect(app.getDayName('11/10/2010')).to.be.equal('Wednesday');
    })
});