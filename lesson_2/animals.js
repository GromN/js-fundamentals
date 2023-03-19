export class Animal {
    constructor(species, age, averageLifespan, size, livingArea ){
        this.species = species;
        this.age = age;
        this.averageLifespan = averageLifespan;
        this.size = size;
        this.livingArea = livingArea;
    }

    logAnimalAge(){
        console.log(`\r\n ${this.species} is ${this.age} years old`);
    }

    yearsLeftToLive(){
     console.log(`\r\n ${this.species} has ${this.averageLifespan - this.age} years left`);
    }

    logAnimalSize(){
        console.log(`\r\n ${this.species}'s average size is ${this.size}` )
    }

    placeOfLiving(){
         console.log(`\r\n ${this.species}'s home is ${this.livingArea}`);
    }

}

// Think of 3 extra properties to add to the Animal class
// Write 3 functions that either calculate or print things based on these properties
// Create lesson02.spec.js file, and write unit tests for all of these functions.