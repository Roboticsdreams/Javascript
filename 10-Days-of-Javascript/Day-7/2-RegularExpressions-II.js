function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    //var re = new RegExp(/^(Mr.|Mrs.|Ms.|Dr.|Er.).[a-zA-Z]+$/);

    const re = /^(Mr?s|[MDE]r)\.[A-Za-z]+$/;
    /*
     * Do not remove the return statement
     */
    return re;
};

module.exports = {
    regexVar
};