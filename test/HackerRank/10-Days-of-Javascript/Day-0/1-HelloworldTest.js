var expect = require('chai').expect;
require('mocha-sinon');
const app = require('../../../../HackerRank/10-Days-of-Javascript/Day-0/1-Helloworld');

describe('Day 0 : Hello World!', function () {
    beforeEach(function () {
        var log = console.log;
        //this.sinon.stub(console, 'log');
        this.sinon.stub(console, 'log').callsFake(function () {
            return log.apply(log, arguments);
        });
    });

    it('Hello, World!', function () {
        app.greeting('Welcome to 10 Days of JavaScript!');
        expect(console.log.calledWith('Hello, World!')).to.be.true;
        expect(console.log.calledWith('Welcome to 10 Days of JavaScript!')).to.be.true;
    })
});