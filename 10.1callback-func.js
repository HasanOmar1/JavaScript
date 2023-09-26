// 1

function isString(str , callback ){

   if(typeof str === 'string'){
    callback(str)
   } 
}

function string(str){

    console.log(str)
}

isString('hello' , string)


// 2


function firstWordUpperCase(str , callback){
    let split = str.split(' ');
    split[0] = split[0].toUpperCase();
    callback(split);

}

function dashes(split){
    console.log(split.join('-'))
}


firstWordUpperCase('hello man whats up' , dashes);


// 3


function firstWordUpperCase(str , callback){
    let split = str.split(' ');
    split[0] = split[0].toUpperCase();
    callback(split);

}

function twos(split){
    console.log(split.join('2'))
}

firstWordUpperCase('hello man woman child' , twos);



// 4


function secondWordUpperCase(str , callback){
    let split = str.split(' ');
    split[1] = split[1].toUpperCase();
    callback(split)

}

function dot(split){
    console.log(split.join('.'))

}

secondWordUpperCase('hello dude whats up?' , dot);
