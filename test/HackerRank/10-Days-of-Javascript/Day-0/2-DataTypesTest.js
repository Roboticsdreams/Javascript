var expect = require('chai').expect;
require('mocha-sinon');

const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-0/2-DataTypes');

describe('Day 0: Data Types', function () {

  beforeEach(function () {
    var log = console.log;
    //this.sinon.stub(console, 'log');
    this.sinon.stub(console, 'log').callsFake(function () {
      return log.apply(log, arguments);
    });
  });

  it('DataTypes', function () {
    var inp1 = 12;
    var inp2 = 4.32;
    var inp3 = "is the best place to learn and practice coding!";
    app.performOperation(inp1, inp2, inp3);
    expect(console.log.calledWith(16)).to.be.true;
    expect(console.log.calledWith(8.32)).to.be.true;
    expect(console.log.calledWith("HackerRank is the best place to learn and practice coding!")).to.be.true;
  });
});