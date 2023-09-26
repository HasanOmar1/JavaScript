function calcAverage (arr){
    var sum = 0 ;
    let avg;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    avg = sum / arr.length
    
    } 
    return avg ;
    }
    console.log(calcAverage([ 85 , 90 , 92 ]));


    // debugger didnt show me any bugs but the problem was i was getting NaN when i did console log because sum wasnt identified as 0
    // i used chrome's dev tool
    // the bug is that sum wasnt identified as 0 when we added arr[0] to it so i was getting NaN in console.log
    // i fixed it by making sum = 0 before the loop and i added avg and returned it.
