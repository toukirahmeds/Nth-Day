const {
    calculateDaysInDecimal,
    getOutputStatement,
    printManualAndExit
} = require("./helpers");

/**
 * Calculates the nth day starting from a specific date.
 * 
 * @param {string} startDateStr 
 * @param {string} endDateStr 
 * @returns {{
 *      nthDay: number,
 *      statement: string
 * }}
 */
const calculateNthDay = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);
    const endDate = endDateStr ? new Date(endDateStr) : new Date();

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        printManualAndExit();
    }

    startDate.setHours(0);

    // Setting hours to 2, to make sure it is larger than startDate
    // and the number of days is in decimal value to get higher
    // ceiling value.
    endDate.setHours(2);

    if (startDate > endDate) {
        console.error("Start date cannot be more than new date.");
        process.exit();
    }

    const totalDaysInDecimal = calculateDaysInDecimal(startDate, endDate);
    const nthDay = Math.ceil(totalDaysInDecimal);

    return {
        nthDay,
        statement: getOutputStatement(nthDay, startDate)
    };
};

module.exports = calculateNthDay;
