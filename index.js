const processCmdLineArgs = require("./processCmdLineArgs");
const processConsoleInput = require("./processConsoleInput");
const { printManualAndExit } = require("./helpers");
const { HELP_ARG } = require("./constants");

// Fetch only the 1st and 2nd arguments.
const cmdLineArgs = process.argv.slice(2, 4);

/**
 * Starts the application.
 */
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
