
let grade = prompt('What is your grade in the form of a letter?');

if ( grade === 'f' || grade === 'F'){
    console.log(`Your grade is between 0-64`);
}
else if ( grade === 'd' || grade === 'D'){
    console.log(`Your grade is between 65-69`);
}
else if(grade === 'c' || grade === 'C'){
    console.log(`Your grade is between 70-79`);

}
else if(grade === 'b' || grade === 'B'){
    console.log(`Your grade is between 80-89`);

}
else if(grade === 'a' || grade === 'A'){
    console.log(`Your grade is between 90-100`);

}
else{
    alert(`Please enter a valid grade`);
}