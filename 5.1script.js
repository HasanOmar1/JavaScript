
let language = prompt('Language?');
let isIsland = prompt('Island? [ true / false]');
let population = parseInt(prompt('Population?')); //25 million
let country = prompt('Country?');




if (language === 'English' && isIsland === 'false' && population < 50000000 && country){ 

    console.log(` You should live in ${country}`);

}

else if (!(language === 'English' && isIsland === 'false' && population < 50000000 && country)){ 

    console.log(`${country} does not meet your criteria`);

}
