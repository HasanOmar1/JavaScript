

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"] ;


let splits = array.join('');
    counts = {};

splits.split('').forEach(function (str) {
    counts[str.toLowerCase()] = (counts[str.toLowerCase()] || 0) + 1;
});

console.log(counts);