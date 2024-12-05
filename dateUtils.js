function formatDate(date, format) {
    if (!(date instanceof Date)) {
        throw new Error("Input must be a Date object");
    }

    if(typeof format !== "string"){
        throw new Error("Input must be a string")
    } 
   
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
        return format
            .replace("YYYY", year)
            .replace("MM", month)
            .replace("DD", day)
            .replace("HH", hours)
            .replace("mm", minutes)
            .replace("ss", seconds);
    }
    


function isWeekend(date) {
    if (!(date instanceof Date)) {
        throw new Error("Input must be a Date object");
    }
    let day = date.getDay()
   
    return day == 0 || day == 6
  
}

function daysBetween(day1, day2) {
    if (!(day1 instanceof Date) || !(day2 instanceof Date)) {
        throw new Error("Input must be a Date object");
    }

    const difference = Math.abs(day1 - day2)
    return date = Math.ceil(difference/1000*60*60*24)

}

module.exports = {formatDate, isWeekend, daysBetween}