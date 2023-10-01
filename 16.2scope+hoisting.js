//block 1

// function funcA() {
    
//     console.log(foo());
//     var a = 1;
//     console.log(a);
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();

    // first we will get a = undefined because its defined after using console log and we are using var here.
    // the function foo will return 2 , so calling funcA() will return 2
    // I fixed the code by moving console.log(a) under the definition of a
    // now we get output : 2 1 , if i move the definition of a above console.log(a) we will get output : 1 2



// block 2


// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName; // will return  Aurelio De Rosa because its the closest to it
// }}};

// console.log(obj.prop.getFullName()); // Aurelio De Rosa
// var test = obj.prop.getFullName(); 
// console.log(test);// Aurelio De Rosa

// first console.log will return Aurelio De Rosa because its the closest fullName to the function
// then we will get undefined because obj.prop.getFullName in var test is not a function because there are no () after getFullName
// I Fixed it by making it a function [ adding ()]
// Last console log will return test() is not a function because test is a declaration , so I fixed it by removing () from test in the console.log
// now we get Aurelio De Rosa twice



//block 3

// function funcB() {
//     let a = b = 0; // a and b = 0
//     a++; // a = 1
//     console.log(typeof a);
//     return a; // 1

// }

//     funcB();
//     console.log(typeof b); // number

    // typeof a = undefined because its in the function scope
    // type of b = number
    // a = b = 0 , this statement declares a local variable a , however , it does declare a global variable b
    // no variable b is declared neither in the function scope or global scope , so javascript interprets b = 0 expression as window.b = 0
    // in other words , b is global variable created accidentally.
    // to fix it i had to move console.log(typeof a) inside the function scope , now it logs number.



    //block 4

    // function funcC() {
    //     console.log("1");
    //     }

    //     funcC(); // 1

    //     function funcC() { 
    //     console.log("2");
    //     }
    //     funcC(); // 2 2

        // the output is : 2 2 
        // what happened is that the second function did override to the first function because they have the same name and the second came after the first
        // the function has been called twice so the output is 2 twice.




        //block 5

        // function funcD1() {
        //     d = 1; // assigning d without declaring it
        //     }

        //     funcD1(); 

        //     console.log(d); //d = 1

        //     function funcD2() {
        //     var e = 1;
        //     console.log(e); // e = 1
        //     }
        //     funcD2(); 

            
      
            // in the first function , d has no declaration so it becomes a global property of the window object.
            // [when we directly assign a variable without declaring, it becomes a global property of the window object]
            // d = 1

            // e = not defined
            // in the second function , e is not defined because it is declared in the function scope
            // i fixed it by moving console.log(e) inside the function scope



        //block 6



        function funcE() {
        console.log("Value of f in local scope: ", f); // f = 1
            }

        var f = 1;
        funcE();
        console.log("Value of f in global scope: ", f); 


        //in the function it will give us f = 1 because f is in the global scope and calling the function came after declaring f
        // console.log in global gave us f = undefined because f inside console.log came before declaring it so it knows there is an f but has not been declared yet.
        // i fixed it by moving console.log in global after declaring f [under the declaration of f]

