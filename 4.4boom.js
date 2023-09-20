

// const numbers = [];
// let n = 18;

// for(let i = 0 ; i<=n ; i++){
//     numbers.push(i);

// if(i % 7 === 0 ){
//     console.log(`BOOM`)
// }
// }

// let n = 12;
// let arr = boom(n);
// console.log(numbers)

// function num(i){

const arr = [];

for(let i = 1 ; i <= 70 ; i++){
    arr.push(i);
    if( i % 7 === 0 && i === 7){
     console.log('BOOM-BOOM'); 
    }

     else if(i % 7 === 0) {
        console.log('BOOM');

    }
    
    else {
        // arr.push(i)
        console.log(i);

    }
}

// }

