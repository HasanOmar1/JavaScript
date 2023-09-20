

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"] ;


let splits = array.join('');
    counts = {};

splits.split('').forEach(function (array) {
    counts[array.toLowerCase()] = (counts[array.toLowerCase()] || 0) + 1 ;
});

console.log(counts);