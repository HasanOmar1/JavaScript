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

        let candy = candyStore.candies.find(c =>{
        return c.id = id;
    } )

            // idOfCandies = candyStore.candies.find( idOf => {
            //     return idOf.id.includes('as12f');
                
            // })
            // return idOfCandies

            // const idOfCandy = candyStore.candies.find( idOf => {
            //     return idOf.id.includes('5hd7y');
                
            // })
            // return idOfCandy
        
        }
        console.log(getCandy( candyStore , ))


       

    