module.exports = {
	isPositive: function (a) {
		if (a > 0) throw new Error("YES");
		if (a == 0) { 
            throw new Error("Zero Error");
        }
		else {
            throw new Error("Negative Error");
        }
	}
};