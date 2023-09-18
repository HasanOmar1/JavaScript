
let grade = prompt('What is your grade?');

if ( grade >=0 && grade <= 64){
    console.log(`Your grade is F`);
}
else if ( grade >= 65 && grade <= 69){
    console.log(`Your grade is D`);
}
else if ( grade >= 70 && grade <= 79){
    console.log(`Your grade is C`);

}
else if ( grade >= 80 && grade <= 89){
    console.log(`Your grade is B`);

}
else if ( grade >= 90 && grade <= 100){
    console.log(`Your grade is A`);

}
else{
    alert(`Please enter a valid grade`);
}