const { MANUAL_TEXT, ONE_DAY } = require("./constants");

const calculateDaysInDecimal = (endDate, startDate) => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    
    return timeDiff / ONE_DAY;
};

const printManualAndExit = () => {
    console.log(MANUAL_TEXT);

    process.exit();
};

module.exports = {
    calculateDaysInDecimal,
    printManualAndExit
};
