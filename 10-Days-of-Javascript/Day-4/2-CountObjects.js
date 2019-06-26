function getCount(objects) {
    var result = 0;
    for (var i = 0; i < objects.length; i++) {
        //console.log(objects[i].x + "= " + objects[i].y);
        if (objects[i].x === objects[i].y) {
            result++;
        }
    }
    return result;
};

module.exports = {
    getCount,
};