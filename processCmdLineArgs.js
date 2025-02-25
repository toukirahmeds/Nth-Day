const calculateNthDay = require("./calculateNthDay");
const { printManualAndExit } = require("./helpers");
const { START_DATE_ARG_TITLE, END_DATE_ARG_TITLE } = require("./constants");

const processCmdLineArgs = (cmdLineArgs) => {
    const startDateArg = cmdLineArgs.find(item => item.startsWith(START_DATE_ARG_TITLE));

    if (!startDateArg) {
        printManualAndExit();
    }

    const startDateStr = startDateArg.replace(START_DATE_ARG_TITLE, "");

    const endDateArg = cmdLineArgs.find(item => item.startsWith(END_DATE_ARG_TITLE));
    const endDateStr = endDateArg
        ? endDateArg.replace(END_DATE_ARG_TITLE, "")
        : undefined;

    return calculateNthDay(startDateStr, endDateStr);
};

module.exports = processCmdLineArgs;
