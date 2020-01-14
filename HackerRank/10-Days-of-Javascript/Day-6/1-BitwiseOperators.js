function getMaxLessThanK(n, k) {
    var result = 0;
    for (var i = 1; i < n; i++) {
        for (var j = i + 1; j <= n; j++) {
            var temp = i & j;
            if ((temp > result)
                && (temp < k)) {
                result = temp;
            }
        }
    }
    return result;
};

module.exports = {
    getMaxLessThanK
};