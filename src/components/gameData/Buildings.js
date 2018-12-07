
export const buildings = {

  dwelling: {
    label: 'Dwelling',
    description: 'population +10 max, +20% growth to passive research and production',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => { G.maxCitizens += 10;  }
  },
  workshop: {
    label: 'Workshop',
    description: '+1 production production per citizen',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => {  }
  },
  huntingCamp: {
    label: 'Hunting Camp',
    description: '+10 people hunting, +1 food per citizen on hunting',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => {  }
  },
  scienceCenter: {
    label: 'Science Center',
    description: '+1 research points per citizen',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => {  }
  },
  storage: {
    label: 'Storage',
    description: '+20% growth to passive research and production',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => {  }
  },
  palisade: {
    label: 'Palisade',
    description: 'Strength +200%',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => {  }
  },
  palace: {
    label: 'Palace',
    description: 'Build this to beat the game',
    active: false,
    buildable: false,
    cost: 200,
    enhancement: (G) => { /** no enhancement as the game is over */ }
  }
}


export const  BuildingMoves = {
}