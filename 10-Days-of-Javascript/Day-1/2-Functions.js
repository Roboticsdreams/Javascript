module.exports = {
    factorial: function (n){
        let result = 1;
        for (var i=n; i>0; i--){
            result = result * i;
        }
        return result;
    }
};