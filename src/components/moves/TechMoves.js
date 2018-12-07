
/**
 * Define all technologies that can be bought.
 * Each technology has an active state, a technology cost and a list of techs that have to be active first.
 */

export const technologies = {

  gathering: {
    label: 'Gathering',
    description: 'Unlocks `Fruits`. Each person gathers 2 food per round.',
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
    description: '`Fruits` can hold 30 people more',
    active: false,
    cost: 200,
    requirements: ['plants'],
    enhancement: (G) => { G.fruits.maxCitizens += 30; }
  },
  agriculture: {
    label: 'Agriculture',
    description: 'Unlocks `Agrar`. 200 Citizen max, +2 food prduction / citizen',
    active: false,
    cost: 200,
    requirements: ['advancedGathering'],
    enhancement: (G) => { G.agrar.active = true; G.agrar.maxCitizens = 50; }
  },
  barter: {
    label: 'Barter',
    description: 'Passive growth of culture & production +20%',
    active: false,
    cost: 200,
    requirements: ['agriculture'],
    enhancement: (G) => { /** TODO */ }
  },

  useOfFire: {
    label: 'Use of Fire',
    description: 'Population +5',
    active: false,
    cost: 100,
    requirements: [],
    enhancement: (G) => { G.maxCitizens += 5 }
  },
  science: {
    label: 'Science',
    description: 'Unlocks `Science`. 10 citizen max, +3 Research points per citizen',
    active: false,
    cost: 200,
    requirements: ['useOfFire'],
    enhancement: (G) => { G.science.active = true; /** TODO add building unlock */ }
  },
  art: {
    label: 'Art',
    description: 'Science +15 citizen max',
    active: false,
    cost: 200,
    requirements: ['science'],
    enhancement: (G) => { G.science.maxCitizens += 15; }
  },
  advancedScience: {
    label: 'Advanced Science',
    description: 'Science + 50 citizen max',
    active: false,
    cost: 200,
    requirements: ['art'],
    enhancement: (G) => { G.science.maxCitizens += 50; }
  },
  buildingOfFire: {
    label: 'Building of Fire',
    description: 'Population +20 max',
    active: false,
    cost: 200,
    requirements: ['useOfFire'],
    enhancement: (G) => { G.maxCitizens += 20; }
  },
  shelter: {
    label: 'Shelter',
    description: 'Population 100 max',
    active: false,
    cost: 200,
    requirements: ['buildingOfFire'],
    enhancement: (G) => { G.maxCitizens = 100; }
  },
  pottery: {
    label: 'Pottery',
    description: 'Population +400 max',
    active: false,
    cost: 200,
    requirements: ['shelter'],
    enhancement: (G) => { G.maxCitizens += 400; }
  },
  architecture: {
    label: 'Architecture',
    description: 'Population +200 max, unlocks building `megalith`',
    active: false,
    cost: 200,
    requirements: ['shelter', 'componentTools'],
    enhancement: (G) => { G.maxCitizens += 200; }
  },

  crudeStoneTools: {
    label: 'Crude Stone Tools',
    description: 'Unlocks mining. 5 citizen max, +3 stone / citizen. Unlocks building `dwelling`',
    active: false,
    cost: 200,
    requirements: [],
    enhancement: (G) => { G.mining.active = true; }
  },
  furClothing: {
    label: 'Fur Clothing',
    description: 'Population +10',
    active: false,
    cost: 200,
    requirements: ['crudeStoneTools'],
    enhancement: (G) => { G.maxCitizens += 10; }
  },
  clothOutfit: {
    label: 'Cloth Outfit',
    description: 'Population +1000 max',
    active: false,
    cost: 200,
    requirements: ['furClothing'],
    enhancement: (G) => { G.maxCitizens += 1000; }
  },
  improvedStoneTools: {
    label: 'Improved Stonetools',
    description: 'Mining +10 citizen max, unlocks `workshop`',
    active: false,
    cost: 200,
    requirements: ['crudeStoneTools'],
    enhancement: (G) => { G.mining.maxCitizens += 10; }
  },
  advancedStoneTools: {
    label: 'Advanced Stonetools',
    description: 'Mining +10 citizen max',
    active: false,
    cost: 200,
    requirements: ['improvedStoneTools'],
    enhancement: (G) => { G.maxCitizens += 10; }
  },  
  componentTools: {
    label: 'Component Tools',
    description: 'Mining +174 citizen max, unlocks palisades',
    active: false,
    cost: 200,
    requirements: ['advancedStoneTools'],
    enhancement: (G) => { G.maxCitizens += 174; }
  },

  palace: {
    label: 'Palace',
    description: 'Unlocks `palace` and possibility to win the game',
    active: false,
    cost: 200,
    requirements: ['architecture', 'barter'],
    enhancement: (G) => { /** TODO */ }
  },
  
  
}


export const TechMoves = {
  unlockTechnology(G, ctx, tech){
    G.resources.researchPoints -= G.technologies[tech].cost;
    G.technologies[tech].active = true;
    G.technologies[tech].enhancement(G);
  }
};
