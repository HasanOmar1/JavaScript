   // 1

function doubleValues(arr){
    return arr.map((double) => double*2)
   }

   console.log(doubleValues([1,2,3,4,5]))


    //2

    function onlyEvenValues(arr){
        let arr1 = []
        arr.forEach(num => {
            if(num % 2 === 0)
        arr1.push(num)
    })
    return arr1

    }
    console.log(onlyEvenValues([1,2,3,4,100,6,7,8,9,0,10,11,12,98,15,66]))

    //3

function showFirstAndLast(arr) {
    let arrThree = []
    let arrFour = []
    arr.forEach((n) => {
      if (typeof n === "string") {
        arrThree.push(n);
      }
    });
  
    arrFour.push(arrThree[0]);
    let lastItem = arrThree.length - 1;
    arrFour.push(arrThree[lastItem]);
    return arrFour;
  }
  
  console.log(showFirstAndLast(['hello', "no", 3, "yes", 5, 6, "ss", "bye" , 3]));

  // 4


function vowelCount(str){
    const vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
    str.split('').forEach(letter => {
        const lowerCase = letter.toLowerCase();
      
        if (vowels[lowerCase] !== undefined) {
            vowels[lowerCase] += 1;
      }
    });
    return vowels
    
    }

    console.log(vowelCount('I said Hello whAts UP'))


    //5

    function capitalize(str){
        let array = str.split(' ')
        let map =  array.map(cap => cap.toUpperCase())
        return map.join(' ');
    }
    console.log(capitalize('hello whats your name'))


    // 6


    function shiftLetters(str){

         return str.split(" ").map(word => {
         return word.split("").map(letter => {
         return String.fromCharCode((letter.charCodeAt() + 1)) })
         .join('') })
         .join(' ')
         }

    console.log(shiftLetters('abc bcd'))
    

    // 7


function swapCase(str){
        
        return str.split(" ").map((word, index) => {
        return (index % 2 === 0) ? word.toUpperCase() : word
        }).join(' ');
        
    
}

console.log(swapCase("hello man, how are you"))










