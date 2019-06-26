var expect = require('chai').expect;
const app = require('../../10-Days-of-Javascript/Day-5/2-TemplateLiterals');

describe('Day 5: Template Literals', function () {
    it('Template Literals', function () {
        let s1 = 10;
        let s2 = 14;
        [s1, s2] = [s1, s2].sort();
        const [x, y] = app.sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

        expect(s1).to.be.equal(x);
        expect(s2).to.be.equal(y);
    })
});