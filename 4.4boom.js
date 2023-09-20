


// function bomb(n){
// const arr = [];

// for(let i = 1 ; i <= n ; i++){
//     // arr.push(i);
//     if( i % 7 === 0 && i.toString.indexOf("7")>-1){
//      console.log('BOOM-BOOM'); 
//     }

//      else if(i % 7 === 0) {
//         console.log('BOOM');

//     }
    
//     else {
//         console.log(i);

//     }
// }
// console.log(arr[i])

// // return arr[i];
// // console.log(arr)

// }
// for(let i = 1 ; i <= 70 ; i++){
//     let arr = [];
//     console.log(arr[i]);
// }


// const divideOrHasSeven = (n) => {
//     let arr = [];
//     for (i = 1; i <= n; i++) {
//         arr.push(i);
//       if (i % 7 === 0 && i.toString().indexOf("7")> -1) { 
//         arr.push(`BOOM-BOOM`)
//       }
//       else if(i % 7 === 0){
//         arr.push('Boom')     }

// }

// return arr;

//   };

//   console.log(divideOrHasSeven(70));



const divideOrHasSeven = (n) => {
    let arr = [];
    for (i = 1; i <= n; i++) {
      if (i % 7 === 0 && i.toString().indexOf("7")> -1) { 
        arr.push(`BOOM-BOOM`)
      }
      else if(i % 7 === 0){
        arr.push('Boom')     }
        else{
            arr.push(i);
        }

}

return arr;

  };

  console.log(divideOrHasSeven(70));

