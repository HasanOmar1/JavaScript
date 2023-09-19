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

// let score = 0;

// if(password.length > 7 ) {
//     score += 1 ;
// }

// /[A-Z]/.test(password) ? score += 1 : null;

// if(score >= 2){
//     console.log('Very strong password');
// }
// else if(password.length === 7){
//     console.log('Strong');
// }
// else{
//     console.log('Weak password');
// }


// Shhady's answer


let score = 0;

password.length > 7 ? score += 1 : null;
/[A-Z]/.test(password) ? score += 1 : null;
/[a-z]/.test(password) ? score += 1 : null;
/[0-9]/.test(password) ? score += 1 : null;
/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) ? score += 1 : null;

if(score >= 4){
    console.log('very strong password');
} else if (score >= 3){
    console.log('strong password');
} else {
    console.log('weak password');
}