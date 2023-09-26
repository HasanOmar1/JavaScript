function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter++ ;
    }
    } return counter ;
    }
    console.log(countOccurrences ( "ini mini miny moe" , "n" ));

    // debugger didnt show me any bugs , but i when i used console log i got the answer 0.
    // i used chrome dev tool
    // the bug was on line 5 , it was counter + 1 instead of counter++
    // i fixed the error by changing counter + 1 to counter++.
