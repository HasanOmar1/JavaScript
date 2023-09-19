

// 1 

const arr = [3,4,4,3,6,3];
  
function removeDuplicates(arr) {
    return arr.filter((num , index) => arr.indexOf(num) === index);
}
console.log(arr);
console.log(removeDuplicates(arr));



// 2

// const array = [3,4,4,3,6,3];
// const noDub = [];

// for(let i = 0; i < array.length; i++) {
//     if(noDub.includes(array[i])) {
//     }
//     else{
//         noDub.push(array[i]);
//     }

// }

// console.log(noDub);





// 3


// let arr = [3,4,4,3,6,3];
// let removeDuplicates = [...new Set(arr)];

// console.log(arr);
// console.log(removeDuplicates);






