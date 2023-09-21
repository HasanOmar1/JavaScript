function date(){

    const date = new Date();
    
    const fullWeekDayName = {
        weekday: 'long'
    };
    const fullMonthName = {
        month : 'long'
    };

    const dateName = (date.toLocaleString('en-IN', fullWeekDayName));
    const currentMonth = (date.toLocaleString('en-IN', fullMonthName));

    let currentDay = date.getDate();
    let currentYear = date.getFullYear(); 

    return `Today is ${dateName} the ${currentDay} of ${currentMonth} ${currentYear}`

}   


console.log(date())
















// -----------------------------------------------------------------
    // const date = new Date();
//     const fullWeekDay = {
//         weekday: 'long'
//     };

// const dateName = (date.toLocaleString('en-IN', fullWeekDay));

// console.log(dateName)

// --------------------------------------------------

//   let fullMonth = {
//         month : 'long'
//     };
//     const currentMonth = (date.toLocaleString('en-IN', fullMonth));
//     console.log(currentMonth)

// ------------------------------------------------


    // let currentDay = date.getDate();


    // let currentYear = date.getFullYear(); 
    // console.log(currentYear)


