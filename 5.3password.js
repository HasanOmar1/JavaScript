const password = prompt('Enter your password:');


// if (password.length > 7){
//     console.log('Strong');
// }

// else{
//     console.log('Weak');
// }


// password.length > 7 ? console.log('Strong') : console.log('Weak');


// if (password.length >= 0 && password.length < 8){
//     console.log('Weak');
// }
// else{
//     console.log('Strong');
// }

let score = 0;

if(password.length > 7 ) {
    score += 1 ;
}

/[A-Z]/.test(password) ? score += 1 : null;

if(score >= 2){
    console.log('Very strong password');
}
else if(password.length === 7){
    console.log('Strong');
}
else{
    console.log('Weak password');
}


