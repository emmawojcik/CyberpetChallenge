import { create } from 'domain';
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

console.log("Welcome to the Cyberpet game!");

//parent class
class Animal {
    constructor(name) {
      this.name = name;
      this.health = 50;
      this.happiness = 50;
      this.hunger = 50;
      this.thirst = 50;
      this.hygiene = 50;
      this.statsNames = ['health', 'happiness', 'hunger', 'thirst', 'hygiene'];
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
        this.health -= 10;
        this.thirst -= 10;
        console.log(`${this.name} loves playing, but oh no it looks like ${this.name} is hurt`);
    }
  }
  class Dog extends Animal {
    constructor(name){
        super(name)
        this.interactionOptions = ['Walk', 'Stroke', 'Wash', 'Feed', 'Rest', 'Play']
    }
    walk(){
        this.hunger -= 5;
        this.thirst -= 10;
        this.happiness += 10;
        console.log(`${this.name} loves going on walks!`);
    }
    stroke(){
      this.happiness += 10;
      console.log(`${this.name} loves to be stroked! That sure is one happy dog.`);
    }
    wash(){
      this.happiness += 10;
      this.health += 5;
      this.hygeine += 10;
      console.log(`${this.name} loves to have a bath and play with the water.`);
    }

    getInteractionOptions() {
      return this.interactionOptions;
    }

  }

  class Cat extends Animal {
    constructor(name){
        super(name)
        this.interactionOptions = ['Walk', 'Stroke', 'feed', 'Rest', 'Play']
    }
    walk(){
      this.happiness -= 10;
      this.hunger -= 5;
      this.thirst -= 10;
      console.log(`${this.name} hates going on walks with you.`);
    }
    stroke(){
      this.happiness -= 5;
      console.log(`${this.name} didn't really enjoy that, but somehow you escape unscathed.`);
    }

    getInteractionOptions() {
      return this.interactionOptions;
    }

  }
  
  class Rabbit extends Animal {
    constructor(name){
        super(name)
        this.interactionOptions = ['Dig', 'run', 'Feed', 'Rest', 'Play']
    }
    Dig(){
      this.happiness += 10;
      this.hygeine -= 10;
      console.log(`${this.name} enjoys digging and making a huge mess`);
    }
    run(){
      this.health -= 10;
      this.hunger -= 10;
      this.thirst -= 10;
      this.happiness += 10;
      console.log(`${this.name} is extremley tired from running so much`);
    }

    getInteractionOptions() {
      return this.interactionOptions;
    }
  }

  class Parrot extends Animal {
    constructor(name){
        super(name)
        this.interactionOptions = ['swing', 'exercise', 'interaction', 'walk', 'feed', 'rest', 'play']
    }
    swing(){
      this.happiness += 10;
      console.log(`${this.name} loves the swing`);
    }
    exercise(){
      this.health += 10;
      this.happiness += 10;
      this.health += 5;
      this.hunger -= 10;
      this.health -= 10;
      console.log(`${this.name} enjoys to fly around in a large space`)
    }
    interaction(){
      this.happiness += 10;
      this.health += 5;
      console.log(`${this.name} really loves interacting with others and it is good for ${this.name}'s mental health`);
    }

    getInteractionOptions() {
      return this.interactionOptions;
    }
  }

// Define an empty pet object
let pet = new Object()

const createPet = async () => {

  const setUpPet = await inquirer.prompt([
    {
      type: 'list',
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
  } else if(setUpPet.petType === 'Rabbit'){
    pet = new Rabbit(setUpPet.petName)
  } else {
    pet = new Parrot(setUpPet.petName)
  }
}

await createPet()
console.log(pet)

export default pet;