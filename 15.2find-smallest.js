function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return b;
    } else {
    return c;
    }
    }
    console.log(findSmallest(52,66, 2));

    // i found a bug  on line 10 
    // i used chrome's dev tools to debug the error
    // the bug is that calling findSmallest() function had a misspell [it was written findSmalest()]