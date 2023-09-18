// John = 89 , 120 , 103
// Mike = 116 , 94 , 123

let teamJohn = (89 + 120 + 103) / 3;
let teamMike = (116 + 94 + 123) / 3;
let teamMary = (97 + 134 + 105) / 3;

// let teamJohn = (89 + 120 + 103) / 3;
// let teamMike = (89 + 120 + 103) / 3;
// let teamMary = (89 + 120 + 103) / 3;

let winnerTeam;

console.log(`John's team has an average score of ${teamJohn}`);
console.log(`Mike's team has an average score of ${teamMike}`);
console.log(`Mary's team has an average score of ${teamMary}`);


if ( teamJohn > teamMike && teamJohn > teamMary){
    winnerTeam = teamJohn; 
    console.log(`John's team is the winner with an average score of ${winnerTeam}`)
}
else if(teamMike > teamJohn && teamMike > teamMary ){
    winnerTeam = teamMike;
    console.log(`Mike's team is the winner with an average score of ${winnerTeam}`)
}
else if(teamMary > teamJohn && teamMary > teamMike ){
    winnerTeam = teamMary;
    console.log(`Mary's team is the winner with an average score of ${winnerTeam}`)
}
else if (teamMike === teamJohn && teamMike === teamMary){
    winnerTeam = teamMike;
    console.log(`There is a draw with an average score of ${winnerTeam} `)
}

