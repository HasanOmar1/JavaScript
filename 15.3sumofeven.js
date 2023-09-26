function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] +
    arr[9];
    }
    console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

    // i didnt get error using debugger but when i used console.log i got NaN [ not a number]
    // i used chrome's dev tool debugger
    // the bug is that arr[10] is not found because the length of the array is 10 so the last index is 9.
    

 
    