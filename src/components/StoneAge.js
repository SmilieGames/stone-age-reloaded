import { Game } from 'boardgame.io/core';

import * as Utils from './Utils'
import VillageMoves from './gameData/_General'
import { TechMoves, technologies } from './gameData/Technologies'
import { BuildingMoves, buildings } from './gameData/Buildings'

const StoneAge = Game({
  setup: () => ({
    maxCitizens: 12,

    resources: {
        food: 0,
        researchPoints: 0,
        culture: 0,
        production: 0
    },

    fruits: {
      active: false,
      currentCitizens: 0,
      maxCitizens: 12,
      foodProductionFactor: 2.0
    },
    agrar: {
      active: false,
      currentCitizens: 0,
      maxCitizens: 50,
      foodProductionFactor: 2.0
    },
    fishing: {
      active: false,
      currentCitizens: 0,
      maxCitizens: 20,
      foodProductionFactor: 3.0
    },
    mining:{
      active: false,
      currentCitizens: 0,
      maxCitizens: 10,
      productionProductionFactor: 2.0
    },
    research:{
      active: false,
      currentCitizens: 0,
      maxCitizens: 10,
      researchProductionFactor: 3.0
    },

    village: {
      currentCitizens: 8
      //tbd productionFactor e.g. military
    },

    technologies,
    buildings,

    factors: {
      foodConsumptionPerCitizen: 1.0,
      researchPassiveProduction: 20,
      productionPassiveProduction: 2
    },

  }),
  moves: {
    ...VillageMoves,
    ...TechMoves,
    // wird zu ...VillageMoves
    
    calculate(G, ctx){

      // food production
      G.resources.food            += Utils.calculateFoodProduction(G);
      G.resources.researchPoints  += Utils.calculateResearchProduction(G);
      G.resources.production      += Utils.calculateProductionProduction(G);

      // food consumption (adjusted for new citizens)
      for(var key in G){
        if(G[key].currentCitizens != null){
          for(let i = 0; i < G[key].currentCitizens; i++){
            if(G.resources.food >= G.factors.foodConsumptionPerCitizen){
              G.resources.food = G.resources.food - G.factors.foodConsumptionPerCitizen;
            }else{
              G[key].currentCitizens = i;
              break;
            }
          }
        }
      }
      
      // add people if food is left
      while(G.resources.food >= 10 && Utils.getCurrentCitizens(G) < G.maxCitizens){
        G.resources.food -= 10;
        G.village.currentCitizens++;
      }

      // don't let food build up indefinitely. Otherwise you could hoard food and build houses later on and BOOM massive citizen rate in one turn.
      if(G.resources.food > 10){
        G.resources.food = 9;
      }
    }
  },
  flow: {
    endGameIf: (G, ctx) => {
      if(ctx.turn === 100){
        if(G.buildings.palace.active === true){
          return { win: true }
        }else{
          return { win: false }
        }
      }
    }
  }
})


export default StoneAge;
