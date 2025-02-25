const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const HELP_ARG = "--help";

const START_DATE_ARG_TITLE = "--startDate=";
const END_DATE_ARG_TITLE = "--endDate=";

const DATE_INPUT_FORMAT_TEXT = "Input Date Format: YYYY-MM-DD";

const MANUAL_TEXT = `Description:
    Find the n-th day starting from a specific date.

${DATE_INPUT_FORMAT_TEXT}

For Command-Line Input:
    - Run 'npm start -- --startDate=[YYYY-MM-DD] --endDate=[YYYY-MM-DD]'.
        Example: 'npm start -- --startDate=2000-01-30 --endDate=2000-02-10'.
    - '--startDate=[YYYY-MM-DD]' is required.
    - '--endDate=[YYYY-MM-DD]' is optional. Default is today's date.
For Console Input:
    - Run 'npm start'
For Help Manual:
    - Run 'npm start -- --help'
`;

module.exports = {
    ONE_DAY,
    HELP_ARG,
    START_DATE_ARG_TITLE,
    END_DATE_ARG_TITLE,
    DATE_INPUT_FORMAT_TEXT,
    MANUAL_TEXT
};
