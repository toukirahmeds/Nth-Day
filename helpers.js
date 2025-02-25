const { ONE_DAY, FIRST_ORD_NUM_SUFFIX, MANUAL_TEXT } = require("./constants");

/**
 * Calculates the number of days in decimal format.
 * 
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @returns {number}
 */
const calculateDaysInDecimal = (startDate, endDate) => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    
    return timeDiff / ONE_DAY;
};

/**
 * Get the ordinal number.
 * 
 * @param {number} num 
 * @returns {string}
 */
const getOrdinalNum = num => {
    const numStr = parseInt(num).toString();    
    const lastDigitStr = numStr[numStr.length - 1];
    
    let ordNumStr;
    if (
        Object.keys(FIRST_ORD_NUM_SUFFIX).includes(lastDigitStr) &&
        (num < 11 || num > 13)
    ) {
        ordNumStr = numStr + FIRST_ORD_NUM_SUFFIX[lastDigitStr];
    } else {
        ordNumStr = numStr + "th";
    }

    return ordNumStr;
};

/**
 * Get the number in 2 digit string.
 * 
 * @param {number} num 
 * @returns {string}
 */
const getTwoDigit = num => num < 10 ? `0${num.toString()}` : num;

/**
 * Get the date in [YYYY-MM-DD] format.
 * 
 * @param {Date} date 
 * @returns {string}
 */
const getDateInDashFormat = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthDate = date.getDate();
    return `${year}-${getTwoDigit(month)}-${getTwoDigit(monthDate)}`;
};

/**
 * Get the output statement.
 * 
 * @param {number} nthDay 
 * @param {Date} startDate 
 * @returns {string}
 */
const getOutputStatement = (nthDay, startDate) =>
    `${getOrdinalNum(nthDay)} day starting from ${getDateInDashFormat(startDate)}`;

/**
 * Prints the help manual and exit the program.
 */
const printManualAndExit = () => {
    console.log(MANUAL_TEXT);

    process.exit();
};

module.exports = {
    calculateDaysInDecimal,
    getDateInDashFormat,
    printManualAndExit,
    getOutputStatement
};
