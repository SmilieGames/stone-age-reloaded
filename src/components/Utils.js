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
  

  //if(foodConsumption >= totalFood){
  if(totalFood - foodConsumption > 0){
    return totalFood - foodConsumption;
  }else{
    return "+" + (foodProduction - foodConsumption) / 10.0;
  }

  // if we dont have enough food for everyone, the population will shrink by this factor
  if(foodProduction - foodConsumption < 0){
    if(currentFood > currentCitizens){
      return 0;
    }else{
      return currentFood - currentCitizens;
    }
  }else{
    return "+" + (foodProduction - foodConsumption) / 10.0;
  }

  if(currentFood + foodProduction - foodConsumption <= 0){
    return currentFood + foodProduction - foodConsumption;
  // we dont look at the currentFood for the population growth
  }else{
    return "+" + (foodProduction - foodConsumption) / 10.0;
  }
}