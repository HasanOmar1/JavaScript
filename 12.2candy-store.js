const candyStore = {
    candies: [
    {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
    },

    {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
    },
    ],

    cashRegister: 200
    }

 
function getCandy(candyStore, id){


    let mintGum = candyStore.candies.find(candy => {
     return candy.id === id;
        
    } )
    return mintGum
    }
    console.log(getCandy( candyStore , '5hd7y'))




function getPrice(candyStore , id){

            
    let candy = getCandy(candyStore ,id)
    return candy.price;

    }
    console.log(getPrice( candyStore , '5hd7y'))

      
    


function addCandy(candyStore, id, name, price){
    let candy = {
        name,
        id,
        price,
        amount : 1
    }
    candyStore.candies.push(candy);
}                    

addCandy(candyStore,'asd1' , 'snickers' , 3)

console.log(candyStore)



function buy(candyStore , id){


     let candy = getCandy(candyStore , id) 
     candy.amount--
     candyStore.cashRegister += candy.price;


}

buy(candyStore , 'asd1')
console.log(candyStore)
