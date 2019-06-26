function getDayName(dateString) {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var newdate = new Date(dateString);
    var dayName = weekdays[newdate.getDay()];
    return dayName;
};

module.exports = {
    getDayName
};