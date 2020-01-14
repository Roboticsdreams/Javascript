function sides(literals, ...expressions) {
    var a = expressions[0];
    var p = expressions[1];
    var s1 = (p + Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4;
    var s2 = (p - Math.sqrt((Math.pow(p, 2) - (16 * a)))) / 4;
    return [s1, s2].sort();
};

module.exports = {
    sides
};