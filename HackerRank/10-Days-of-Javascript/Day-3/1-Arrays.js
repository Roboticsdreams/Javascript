module.exports = {
    getSecondLargest: function (nums) {
        let max = -Infinity, result = -Infinity;

        for (const value of nums) {
          const nr = Number(value)
      
          if (nr > max) {
            [result, max] = [max, nr] // save previous max
          } else if (nr < max && nr > result) {
            result = nr; // new second biggest
          }
        }
        return result;
    }
};