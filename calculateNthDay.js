const { calculateDaysInDecimal, printManualAndExit } = require("./helpers");

const calculateNthDay = (oldDateStr, newDateStr) => {
    const oldDate = new Date(oldDateStr);
    const newDate = newDateStr ? new Date(newDateStr) : new Date();

    if (isNaN(oldDate.getTime()) || isNaN(newDate.getTime())) {
        printManualAndExit();
    }

    oldDate.setHours(0);

    // Setting hours to 2, to make sure it is larger than oldDate
    // and the number of days is in decimal value to get higher
    // ceiling value.
    newDate.setHours(2);

    if (oldDate > newDate) {
        console.error("Old date cannot be more than new date.");
        process.exit();
    }

    const totalDaysInDecimal = calculateDaysInDecimal(newDate, oldDate);

    return Math.ceil(totalDaysInDecimal);
};

module.exports = calculateNthDay;
