function date(){

    const date = new Date();
    
    const fullDayName = {
        weekday: 'long'
    };
    const fullMonthName = {
        month : 'long'
    };

    let dateName = (date.toLocaleString('en-IN', fullDayName));
    let currentMonth = (date.toLocaleString('en-IN', fullMonthName));
    let currentDate = date.getDate();
    let currentYear = date.getFullYear(); 

    return `Today is ${dateName} the ${currentDate} of ${currentMonth} ${currentYear}`

}   

console.log(date())
















