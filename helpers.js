const { MANUAL_TEXT, ONE_DAY } = require("./constants");

const calculateDaysInDecimal = (newDate, oldDate) => {
    const timeDiff = newDate.getTime() - oldDate.getTime();
    
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
