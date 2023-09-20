

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

