module.exports = {
    reverseString: function (s) {
        try {
            var result = s;
            result = s.split('').reverse().join('');
        }
        catch (error) {
            return error.message;
        }
        finally {
            return result;
        }
    },
};