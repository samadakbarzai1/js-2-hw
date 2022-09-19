//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let round = 0; 
while(round<Object.keys(person3).length){ 
    console.log(Object.keys(person3)[i]);
    console.log(Object.values(person3)[i]);
    i++;
}




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

   
    printInfo = () => {return `Name: ${this.name} \n Age: ${this.age}`}

    
    aging = (year1) => this.age += year1
}

let samad = new Person('samad', 20)
let akbarzai = new Person('akbarzai', 25)


console.log(samad.printInfo())
console.log(akbarzai.printInfo())

viserys.aging(3)
console.log(samad.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



const long = (num) => {
    return new Promise( (resolve,reject) => {
        if(num > 10){
            resolve(true)
        } 
        
        else {
            reject(false)
        }
    })
}


long(5)

.then( (result) => {
    console.log(`large:' ${result}`)
})

.catch( (error) => {
    console.log(`small:' ${error}`)
})
