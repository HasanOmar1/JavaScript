function percentageOfWorld1(population ,  countryName){
    population = (population / 7900 * 100);
    let percentage = population.toFixed(1);
    return `${countryName} has ${percentage}% of the world population`
  
}

let China = console.log(percentageOfWorld1(1441 ,'China'))
let India = console.log(percentageOfWorld1(1408 ,'India'))
let USA = console.log(percentageOfWorld1(331.9 ,'USA'))


const percentageOfWorld2 = (population , countryName) => {

  population = (population / 7900 * 100);
    let percentage = population.toFixed(1);
    return `${countryName} has ${percentage}% of the world population`

}

let China1 = console.log(percentageOfWorld1(1441 ,'China'))
let India1 = console.log(percentageOfWorld1(1408 ,'India'))
let USA1 = console.log(percentageOfWorld1(331.9 ,'USA'))
