import { Game } from 'boardgame.io/core';

import { getCurrentCitizens } from './Utils'


const StoneAge = Game({
  setup: () => ({
    maxCitizens: 12,

    resources: {
        food: 0
    },

    agrar: {
      currentCitizens: 0,
      maxCitizens: 10,
      foodProductionFactor: 2.0
    },

    village: {
      currentCitizens: 8
    },

    factors: {
      foodConsumptionPerCitizen: 1.0
    },
    /*
    ich glaube hier die Falsche stelle. Ich will erst alle freigeschalteten Technologieboni addieren bevor sie den wirklichen Faktoren addiert
    technologyBonus:{
      bonusFoodProductionFactor: 0

    }
    */
  }),
  moves: {
    addCitizensToAgrar(G, ctx){
      if(G.agrar.currentCitizens < G.agrar.maxCitizens && G.village.currentCitizens > 0){
        G.agrar.currentCitizens++;
        G.village.currentCitizens--;
      }
    },
    removeCitizensFromAgrar(G, ctx){
      if(G.agrar.currentCitizens > 0){
        G.agrar.currentCitizens--;
        G.village.currentCitizens++;
      }
    },
    calculate(G, ctx){

      // food production
      G.resources.food = G.resources.food + G.agrar.currentCitizens * G.agrar.foodProductionFactor;

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
      while(G.resources.food >= 10 && getCurrentCitizens(G) < G.maxCitizens){
        G.resources.food -= 10;
        G.village.currentCitizens++;
      }

      // don't let food build up indefinitely. Otherwise you could hoard food and build houses later on and BOOM massive citizen rate in one turn.
      if(G.resources.food > 10){
        G.resources.food = 9;
      }
    }
  }
})


export default StoneAge;
