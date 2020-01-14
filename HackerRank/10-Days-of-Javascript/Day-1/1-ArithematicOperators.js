module.exports = {
    /** Calculate the area of a rectangle.
     *   length: The length of the rectangle.
     *   width: The width of the rectangle.
     *	Return a number denoting the rectangle's area.
     **/
    getArea: function (length, width) {
        let area;
        area = length * width;
        return area;
    },

    /**  Calculate the perimeter of a rectangle.
     *	 length: The length of the rectangle.
     *   width: The width of the rectangle.
     *	 Return a number denoting the perimeter of a rectangle.
     **/
    getPerimeter: function (length, width) {
        let perimeter;
        perimeter = 2 * (length + width);
        return perimeter;
    }
};
