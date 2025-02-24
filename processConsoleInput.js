const readline = require("readline").promises;
const calculateNthDay = require("./calculateNthDay");

const processConsoleInput = async () => {
    const rLInterface = readline.createInterface(
        process.stdin,
        process.stdout
    );



    rLInterface.close();
};

module.exports = processConsoleInput;
