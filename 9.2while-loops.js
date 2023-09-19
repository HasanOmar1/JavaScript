
let random = Math.floor(Math.random() * 50 + 1);

 let answer = prompt("Guess a number between 1 and 50");



while(answer != random){


    if(answer < random){
        alert("Your guess is too low!");

    }

    else{
        alert("Your guess is too high!");
}
    

answer = prompt("Guess a number between 1 and 50");

}

    alert("The guess is correct!")
    



