const { printManualAndExit } = require("./helpers");
const calculateNthDay = require("./calculateNthDay");

const processCmdLineArgs = (cmdLineArgs) => {
    const oldDateArg = cmdLineArgs.find(item => item.startsWith("--oldDate="));

    if (!oldDateArg) {
        printManualAndExit();
    }

    const oldDateStr = oldDateArg.replace("--oldDate=", "");

    const newDateArg = cmdLineArgs.find(item => item.startsWith("--newDate="));
    const newDateStr = newDateArg
        ? newDateArg.replace("--newDate=", "")
        : undefined;

    return calculateNthDay(oldDateStr, newDateStr);
};

module.exports = processCmdLineArgs;
