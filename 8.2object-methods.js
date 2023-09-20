const myCountry = {
    country : 'Germany',
    capital : 'Berlin',
    language : 'German',
    population : '83.2 million',
    neighbours : ['Denmark' , 'Poland' , 'Czesh Republic' , 'Austria' , 'France' , 'Switzerland' , 'Belgium' , 'Luxembourg' , 'Netherlands'],
    

    describe(){
    console.log(`${this.country} has ${this.population} ,
    their mother tongue is ${this.language} , 
    they have  ${this.neighbours.length} neighbours and a capital called ${this.capital}`);
       

    } ,

    checkIsland(){
        let isIsland = this.neighbours;
    
        if (isIsland ? console.log('Not an Island') : console.log(`Island`));
    }

}
myCountry.describe();
myCountry.checkIsland();

