const calculateNthDay = require("./calculateNthDay");

const main = async () => {
    const result = calculateNthDay("2000-01-01", "2000-01-31");

    console.log(result);
};

main();
