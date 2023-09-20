function leapYear (year) {

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            return `It is Indeed a leap year`
        } else{
            return `Not a leap year`
        }
    }else {
        return `It is indeed a leap year`
    }
}else {
    return `Not leap year`
}


}

console.log(leapYear(2400));
