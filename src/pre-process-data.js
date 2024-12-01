export function reformat_time(entry) {
    // parses string and compares with current day to see if today is a special day
    // if so returns true otherwise it returns false
    const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (regex.test(entry['Date'])) {
        let dates = entry["Date"].split("/");
        let day = dates[1];
        let month = dates[0];
        let current_date = new Date(); 
        let special_day = new Date(current_date.getFullYear(), Number(month) - 1, Number(day));
    
        if (special_day.toDateString() === current_date.toDateString()) {
            console.log("someones special day!");
            return true;
        }
        else {
            return false;
        };
    }
    else {
        return false;
    }
}