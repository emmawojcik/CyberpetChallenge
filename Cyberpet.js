import { create } from 'domain';
import inquirer from 'inquirer';

class Animal {
    constructor(name) {
      this.name = name;
      this.health = 50;
      this.happiness = 50;
      this.hunger = 50;
      this.thirst = 50;
    }
    feed(){
        this.hunger += 15;
        this.happiness += 10;
        this.health += 10;
        console.log(`${this.name} loves food`);
    }
    rest(){
        this.health += 5;
        this.happiness +=5;
        console.log(`${this.name} is full of energy!`);
    }
    play(){
        this.happiness += 10;
        this.hunger -= 5;
        this.thirst -= 10;
        console.log(`${this.name} loves playing`);
    }
  }
  class Dog extends Animal {
    constructor(name){
        super(name)
    }
    walk(){
        this.hunger -= 5;
        this.thirst -= 10;
        this.happiness += 10;
        console.log(`${this.name} loves going on walks!`);
    }

  }

  class Cat extends Animal {
    constructor(name){
        super(name)
    }

  }
  
  class Rabbit extends Animal {
    constructor(name){
        super(name)
    }

  }

  class Parrot extends Animal {
    constructor(name){
        super(name)
    }
    
  }


// const setUpQuestions = [
//   {
//     type: 'input',
//     name: 'petType',
//     message: 'What kind of pet do you want? Please choose from the following:',
//     choices: ['Cat', 'Dog', 'Rabbit', 'Parrot']
//   },
//   {
//     type: 'input',
//     name: 'petName',
//     message: 'What do you want your pet to be called?'
//   }
// ]


// Define an empty pet object
let pet = new Object()

const createPet = async () => {

  const setUpPet = await inquirer.prompt([
    {
      type: 'input',
      name: 'petType',
      message: 'What kind of pet do you want? Please choose from the following:',
      choices: ['Cat', 'Dog', 'Rabbit', 'Parrot']
    },
    {
      type: 'input',
      name: 'petName',
      message: 'What do you want your pet to be called?'
    }
  ])

  if(setUpPet.petType === 'Cat'){
    pet = new Cat(setUpPet.petName)
  } else if(setUpPet.petType === 'Dog'){
    pet = new Dog(setUpPet.petName)
    console.log(pet)
  } else if(setUpPet.petType === 'Rabbit'){
    pet = new Rabbit(setUpPet.petName)
  } else {
    pet = new Parrot(setUpPet.petName)
  }
}

createPet()