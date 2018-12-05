const VillageMoves = {   
  addCitizens(G, ctx, selectedStation){
    if(G[selectedStation].currentCitizens < G[selectedStation].maxCitizens && G.village.currentCitizens > 0){
      G[selectedStation].currentCitizens++;
      G.village.currentCitizens--;
    }
  },
  removeCitizens(G, ctx, selectedStation){
    if(G[selectedStation].currentCitizens > 0){
      G[selectedStation].currentCitizens--;
      G.village.currentCitizens++;
    }
  }
}


export default VillageMoves;
