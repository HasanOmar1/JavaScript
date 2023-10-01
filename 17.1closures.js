
// block 1

// var b = 1;
// function someFunction(number) {
//     function otherFunction(input) {
//     return b; // b = 5
//     }

// b = 5;
// return otherFunction;
// }
// var firstResult = someFunction(9); 
// var result = firstResult(2); 

//it returns nothing because there is no console.log so this is just a function that we are not using.




//block 2

// var a = 1;

// function b2() {
// a = 10;
// return;

//     function a() { }
// }

// b2();

// console.log(a); // 1

//inside function b2 there is no return value so its not returning anything so its an empty function.[nothing happens]
//console.log(a) returns the value of the global a [a = 1 ] because its called in the global scope and not inside the function scope[ a = 10 in function scope].



//block 3


let i;

for (i = 0; i < 3; i++) {

    const log = () => {

    console.log(i);  // 3 3 3 
    }

setTimeout(log,100);
}

// the output is 3 3times and thats is because :
// The setTimeout function callback isn't triggered until the for loop execution has completed
// when the for loop has finished executing , the value of i is 3
// now when the setTimeout call begins to execute it uses the last set of value of i which is 3
// hence 3 is printed in all the setTimeout callbacks.