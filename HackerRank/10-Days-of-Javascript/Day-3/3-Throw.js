module.exports = {
    isPositive: function (a) {
        if (a > 0) throw new Error("YES");
        if (a == 0) throw new Error("Zero Error");
        if (a < 0) throw new Error("Negative Error");
    }
};