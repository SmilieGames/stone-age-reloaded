
/**
 * Define all technologies that can be bought.
 * Each technology has an active state, a technology cost and a list of techs that have to be active first.
 */

export const technologies = {

  gathering: {
    label: 'Gathering',
    description: 'Unlocks fruits. Each person gathers 2 food per round.',
    active: false,
    cost: 0,
    requirements: [],
    enhancement: (G) => { G.fruits.active = true }
  },
  plants: {
    label: 'Knowledge of Plants',
    description: 'Fruits can hold 10 people more, also +1 food production / citizen',
    active: false,
    cost: 100,
    requirements: ['gathering'],
    enhancement: (G) => { G.fruits.foodProductionFactor += 1; G.fruits.maxCitizens += 10; }
  },
  advancedGathering: {
    label: 'Advanced Gathering',
    description: '',
    active: false,
    cost: 200,
    requirements: ['plants'],
    enhancement: (G) => { G.fruits.foodProductionFactor += 2; }
  }  
}
      

export const TechMoves = {
  unlockTechnology(G, ctx, tech){console.log(tech)
    G.technologies[tech].active = true;
    G.technologies[tech].enhancement(G);
  }
};
