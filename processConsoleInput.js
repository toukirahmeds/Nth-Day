const readline = require("readline").promises;
const calculateNthDay = require("./calculateNthDay");
const { getDateInDashFormat } = require("./helpers");

const { DATE_INPUT_FORMAT_TEXT } = require("./constants");

const PROMPT_FROM_DATE = `
Provide the start date (Required): `;

const dateToday = new Date();
const PROMPT_TO_DATE = `Provide the end date (Default: ${getDateInDashFormat(dateToday)}): `;

const getRLInterface = () => readline.createInterface(
    process.stdin,
    process.stdout
);

const getDateInput = async (promptStr, isFromDate) => {
    const rLInterface = getRLInterface();

    const dateInput = await rLInterface.question(promptStr);

    rLInterface.close();

    const date = new Date(dateInput);

    if (isFromDate && isNaN(date.getTime())) {
        console.log(`Start date must be given in proper date input format!`)
        return getDateInput(promptStr, isFromDate);
    }

    return dateInput;
};

const processConsoleInput = async () => {
    console.log(DATE_INPUT_FORMAT_TEXT);

    const fromDate = await getDateInput(PROMPT_FROM_DATE, true);
    const toDate = await getDateInput(PROMPT_TO_DATE);

    return calculateNthDay(fromDate, toDate);
};

module.exports = processConsoleInput;
