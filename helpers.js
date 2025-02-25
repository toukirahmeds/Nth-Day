const { MANUAL_TEXT, ONE_DAY } = require("./constants");

const calculateDaysInDecimal = (endDate, startDate) => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    
    return timeDiff / ONE_DAY;
};

const FIRST_ORD_NUM_SUFFIX = {
    "1": "st",
    "2": "nd",
    "3": "rd"
};

const getOrdinalNum = (num) => {
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

const getTwoDigit = (num) => num < 10 ? `0${num.toString()}` : num;

const getDateInDashFormat = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const monthDate = date.getDate();
    return `${year}-${getTwoDigit(month)}-${getTwoDigit(monthDate)}`;
};

const getOutputStatement = (nthDay, startDate) =>
    `${getOrdinalNum(nthDay)} day starting from ${getDateInDashFormat(startDate)}`;

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
