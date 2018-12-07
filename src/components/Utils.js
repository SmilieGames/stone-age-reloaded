/**
 * 
 * 
 * 
 * MAKE SURE THAT NO FUNCTIONS IN THIS FILE ALTER THE GAME STATE IN ANY WAY!
 * 
 * 
 * 
 */


// calculate the current citizens from the current game state
export function getCurrentCitizens(G){

  let currentCitizens = 0;

  for(var key in G){
    if(G[key].currentCitizens != null){
      currentCitizens += G[key].currentCitizens
    }
  }

  return currentCitizens;
}

// calculate the food production for this round
export function calculateFoodProduction(G){
  let foodProduction = 0;

  for(var key in G){
    if(G[key].foodProductionFactor != null){
      foodProduction += G[key].foodProductionFactor * G[key].currentCitizens;
    }
  }

  return foodProduction;
}

// calculate the food production for this round
export function calculateProductionProduction(G){
  let prductionProduction = G.factors.productionPassiveProduction;

  for(var key in G){
    if(G[key].productionProductionFactor != null){
      prductionProduction += G[key].productionProductionFactor * G[key].currentCitizens;
    }
  }

  return prductionProduction;
}

// calculate the food production for this round
export function calculateResearchProduction(G){
  let researchProduction = G.factors.researchPassiveProduction;

  for(var key in G){
    if(G[key].researchProductionFactor != null){
      researchProduction += G[key].researchProductionFactor * G[key].currentCitizens;
    }
  }

  return researchProduction;
}
// calculate, by how much your population will grow or shrink
export function estimatedCitizenGrowth(G){
  const foodProduction = calculateFoodProduction(G);
  const currentCitizens = getCurrentCitizens(G);
  const currentFood = G.resources.food;

  // we need to handle the two cases if we have a positive or negative factor, as the factors differ for both cases
  const foodConsumption = currentCitizens * G.factors.foodConsumptionPerCitizen

  const totalFood = foodProduction + currentFood;
  const remainingFood = totalFood - foodConsumption;

  if(foodProduction - foodConsumption < 0){
    if(remainingFood < 0){
      return totalFood - foodConsumption;
    }else{
      return 0;
    }
  }else{
    return "+" + (foodProduction - foodConsumption) / 10.0;
  }
}