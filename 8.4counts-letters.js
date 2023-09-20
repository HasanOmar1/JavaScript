
// function count(array){

    
// }
// 
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
// let array = 'sasijdasdlasfioasjfasjdiwwqwwwasdggghh'
let counts = {};

for (let i in array){
    const letter = array[i].toLowerCase();
    console.log(letter)
    if(letter === " ") ;
    else if(counts[letter] == undefined){
        // console.log('found' + letter + 'for the first time');
        counts[letter] = 1;
    }
    else {
        // console.log('Found' + letter + 'more than once');
        counts[letter] = counts[letter] +1; 
        }
}

console.log(counts);