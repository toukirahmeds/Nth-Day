const processCmdLineArgs = require("./processCmdLineArgs");

const cmdLineArgs = process.argv.slice(2, 4);

const main = async () => {
    let result;

    if (cmdLineArgs.length > 0) {
        result = processCmdLineArgs(cmdLineArgs);
    }

    console.log(`Output: ${result}`);
};

main();
