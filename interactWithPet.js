import inquirer from 'inquirer';
import pet from './Cyberpet.js';

console.log(pet.getInteractionOptions());

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

// While pet is alive, interact with pet
while(pet.health > 0){
  await petInteract();
}

// Make function for when pet dies (their health reaches zero)
if (pet.health <= 0) {
  console.log(`${pet.name} has died, make sure to look after your next pet properly`);
}

