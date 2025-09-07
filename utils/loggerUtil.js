const RESET = "\x1b[0m";
const FG_GREEN = "\x1b[32m";
const FG_RED = "\x1b[31m";
const FG_BLUE = "\x1b[34m";


function getISTFormattedDate() {
    const now = new Date();

    // Convert to IST using toLocaleString
    const options = {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'long', // Full month name
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const datePart = new Intl.DateTimeFormat('en-GB', options).format(now).replace(',', '');
    
    // Get milliseconds separately
    const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const milliseconds = istDate.getMilliseconds().toString().padStart(3, '0');

    return `${datePart}.${milliseconds}`;
}

function INFO(message){

    console.log(`${FG_GREEN}[INFO] ${getISTFormattedDate()} - ${message}`);
}

function ERROR(message){

    console.log(`${FG_RED}[ERROR] ${getISTFormattedDate()} - ${message}`);
}

function LOG(message){

    console.log(`${FG_BLUE}[LOG] ${getISTFormattedDate()} - ${message}`);
}

module.exports = {
  INFO,
  ERROR,
  LOG
};