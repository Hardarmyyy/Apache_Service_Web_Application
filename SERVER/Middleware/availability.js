const path = require('path');
const {addHours, isBefore, isAfter} = require('date-fns')


// Middleware to check if the current time is between Monday and Friday, 9:00 am and 5:00 pm
const checkAvailability = (req, res, next) => {
    const date = new Date();
    const resetTime = date.setHours(0, 0, 0) // reset the current time to start at 000
    const startTime = addHours(resetTime, 9) // add the starting hours to the reset time
    const endTime = addHours(startTime, 8) // add the ending hours to the start time
    
    const timeNow = new Date()
    const currentDay = timeNow.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday // Get the current day
    
    if ((currentDay >= 1 && currentDay <= 5) && (isAfter(timeNow, startTime)) && (isBefore(timeNow, endTime))) { // validating time and day of request;
        next(); // Continue to the next middleware or route handler
    } else {
        res.status(403).sendFile(path.join(__dirname, '../pages', 'notavailable.html'));
    }
};

module.exports = checkAvailability 