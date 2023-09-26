function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum;
    }
    console.log(getSum([1,2,3],[5,66,23]));


    // the bug is on line 3
    // i used chrome's dev tool debugger 
    // the bug is that arr1.length is not defined [because there is no  , between arr1 and arr2]
    // the next bug is on line 4 and the error is that sum is const which can not be changed
    // i fixed it by changing it to let.
    // then i noticed that the code doesnt return anything , so i used return sum and used console.log to get the sum