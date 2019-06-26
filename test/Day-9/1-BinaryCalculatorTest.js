let jsdom = require('jsdom').JSDOM;
var chai = require('chai');
var expect = chai.expect;
const simulant = require('jsdom-simulant');

var uri = '10-Days-of-Javascript/Day-9/1-BinaryCalculator/index.html';

var options = {
    runScripts: 'dangerously',
    resources: "usable",
};

describe('Day 9: Binary Calculator', function () {
    before(function () {
        return jsdom.fromFile(uri, options)
            .then((dom) => {
                global.window = dom.window;
                global.document = dom.window.document;
            });
    })
    it('Button Render Test: No Click', function (done) {
        setTimeout(() => {
            expect(document.getElementById('res').innerHTML).to.be.equal('');
            done();
        }, 500);
    });
    it('Button Render Test: After 111100001 Clicks', function () {
        const btn0 = document.getElementById('btn0');
        const btn1 = document.getElementById('btn1');
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn1, "click");
        expect(document.getElementById('res').innerHTML).to.be.equal('111100001');
    });
    it('Button Render Test: After +11110 Clicks', function () {
        const btnsum = document.getElementById('btnSum');
        const btn0 = document.getElementById('btn0');
        const btn1 = document.getElementById('btn1');
        simulant.fire(btnsum, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn0, "click");
        expect(document.getElementById('res').innerHTML).to.be.equal('111100001+11110');
    });
    it('Button Render Test: After = Clicks', function () {
        const btneql = document.getElementById('btnEql');
        simulant.fire(btneql, "click");
        expect(document.getElementById('res').innerHTML).to.be.equal('111111111');
    });
    it('Button Render Test: After C1001 Clicks', function () {
        const btnclr = document.getElementById('btnClr');
        const btn0 = document.getElementById('btn0');
        const btn1 = document.getElementById('btn1');
        simulant.fire(btnclr, "click");
        simulant.fire(btn1, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn0, "click");
        simulant.fire(btn1, "click");
        expect(document.getElementById('res').innerHTML).to.be.equal('1001');
    });
});