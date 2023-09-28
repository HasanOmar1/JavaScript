const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
    },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
    },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
    },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
    },
    },
    ];



// 1
    //     let names =  data.map( allNames => {
    //         return {Name : allNames.name}
    //     })
    
    // console.log(names)

//2

    //    function old(arr){
    //     let arr2 = []
    //     arr.forEach(object => {
    //     const now = new Date(object.birthday)
    //     let year = now.getFullYear()
    //     if(year < 1990) {
    //         arr2.push(object)
    //     }
            
    //     })
    //     return arr2

    // }
    //    console.log(old(data))







       // 3
       function foodCount(arr) {

        const foodCounter = {};
        arr.forEach((obj) => {
            for (const foodType in obj.favoriteFoods) {
                for (const food of obj.favoriteFoods[foodType]) {
                    if (foodCounter[food]) {
                        foodCounter[food]++;
                    } else {
                        foodCounter[food] = 1;
                    }
                }
            }
        });
        return foodCounter;
    }
    console.log(foodCount(data));
    
