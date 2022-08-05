import inquirer from 'inquirer';
import chalk from 'chalk';
import pet from './Cyberpet.js';
import figlet from 'figlet';
import { Console } from 'console';

const checkPetStats = () => {
  for(let stat in pet.statsNames){
    let statName = pet.statsNames[stat];

    // To avoid going into minus numbers for stat levels
    if(pet[statName] <= 0){ 
      pet[statName] = 0;
    }
    // Check each stat level and give a warning if level is less than or equal to 20
    if(pet[statName] <= 20 && pet[statName] > 0){
      console.log(chalk.red(`WARNING: ${statName} level is ${pet[statName]}`));
    }
  }

  // If hunger level reaches zero, health reaches zero
  if(pet.hunger == 0){
    console.log(chalk.red('HUNGER LEVEL REACHED ZERO'));
    pet.health = 0;
  }
  // If thirst levels reaches zero, health reaches zero
  if(pet.thirst == 0){
    console.log(chalk.red('THIRST LEVEL REACHED ZERO'));
    pet.health = 0;
  }
}

const logStats = () => {
    // Log the updated stats
    console.log('------------------');
    console.log(`YOUR PET'S STATS: `);
    console.log('------------------');
    console.log(`Health: ${pet.health}`);
    console.log(`Happiness: ${pet.happiness}`);
    console.log(`Hunger: ${pet.hunger}`);
    console.log(`Thirst: ${pet.thirst}`);
    console.log(`Hygiene: ${pet.hygiene}`);
    console.log('------------------');
}


const petInteract = async () => {
  const interaction = await inquirer.prompt ([
    {
      type: 'list',
      name: 'petInteraction',
      message: `What do you and ${pet.name} want to do together?`,
      choices: pet.getInteractionOptions()
    }
  ])
  // Call the chosen interaction on the pet object
  let chosenInteraction = String(interaction.petInteraction).toLowerCase();
  pet[chosenInteraction]()

  checkPetStats();

  logStats();

}

// While pet is alive, interact with pet
while(pet.health > 0){
  await petInteract();
}

// Make function for when pet dies (their health reaches zero)
if (pet.health <= 0) {
  console.log(chalk.red(`${pet.name} has died, make sure to look after your next pet properly`));
  figlet('Game Over', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}

