class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.perimeter = function () {
            var result = 0;
            for (var i = 0; i < sides.length; i++) {
                result += sides[i];
            }
            return result;
        }
    }
};

module.exports = Polygon;