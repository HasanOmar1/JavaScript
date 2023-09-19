

let arr = [3,4,4,3,6,3];
  
function removeDuplicates(arr) {
    return arr.filter((num , index) => arr.indexOf(num) === index);
}
console.log(arr);
console.log(removeDuplicates(arr));