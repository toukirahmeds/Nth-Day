const processCmdLineArgs = require("./processCmdLineArgs");
const processConsoleInput = require("./processConsoleInput");
const { printManualAndExit } = require("./helpers");
const { HELP_ARG } = require("./constants");

const cmdLineArgs = process.argv.slice(2, 4);

const main = async () => {
    let result;

    if (cmdLineArgs.includes(HELP_ARG)) {
        printManualAndExit();
    }

    if (cmdLineArgs.length > 0) {
        result = processCmdLineArgs(cmdLineArgs);
    } else {
        result = await processConsoleInput();
    }

    console.log(`Output: ${result.statement}`);
};

main();
