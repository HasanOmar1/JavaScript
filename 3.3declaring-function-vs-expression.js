function percentageOfWorld1(population ,  countryName){
    population = (population / 7900 * 100);
    let percentage = population.toFixed(1);
    return `${countryName} has ${percentage}% of the world population`
  
}

console.log(percentageOfWorld1(1441 ,'china'))
console.log(percentageOfWorld1(1408 ,'India'))
console.log(percentageOfWorld1(331.9 ,'USA'))


const percentageOfWorld2 = (population , countryName) => {

  population = (population / 7900 * 100);
    let percentage = population.toFixed(1);
    return `${countryName} has ${percentage}% of the world population`

}

console.log(percentageOfWorld2(1441 ,'china'))
console.log(percentageOfWorld2(1408 ,'India'))
console.log(percentageOfWorld2(331.9 ,'USA'))
// let china = console.log(percentageOfWorld2(1441))

// let India = console.log(percentageOfWorld2(1408))
// let USA = console.log(percentageOfWorld2(331.9))

