let jsdom = require('jsdom').JSDOM;
var chai = require('chai');
var expect = chai.expect;
const simulant = require('jsdom-simulant');

var uri = 'HackerRank/10-Days-of-Javascript/Day-8/1-Create-a-button/index.html';

var options = {
  runScripts: 'dangerously',
  resources: "usable",
};

describe('Day 8: Create a Button', function () {
  before(function () {
    return jsdom.fromFile(uri, options)
      .then((dom) => {
        global.window = dom.window;
        global.document = dom.window.document;
      });
  })
  it('Button Render Test: No Click', function (done) {
    setTimeout(() => {
      expect(document.getElementById('btn').innerHTML).to.be.equal('0');
      done();
    }, 500);
  });
  it('Button Render Test: After 4 Clicks', function () {
    const myButton = document.getElementById('btn');
    simulant.fire(myButton, "click");
    simulant.fire(myButton, "click");
    simulant.fire(myButton, "click");
    simulant.fire(myButton, "click");
    expect(document.getElementById('btn').innerHTML).to.be.equal('4');
  });
});