//1


function max(arr){
    return arr.reduce((a,b) => Math.max(a,b) , 0)
}

console.log(max([1,2,66,3,4]))


//2


const even = (arr) => arr.reduce((acc,currentVal) => {
    return currentVal % 2 === 0 ? currentVal + acc : acc
} , 0)

console.log(even([1,2,4,3,6,1,2,6,5]))


//3

function avg(arr){
    return arr.reduce((a,b) =>  (a+b) , 0 ) / arr.length
    
}

console.log(avg([1,4]))