const VillageMoves = {
  AgrarMoves: {
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
    }
  }

  /*besser: nur addCitizens und removeCiiitizens
  addCitizensToAgrar(G, selectedStation, ctx){
    if(G[selectedStation]. < G.agrar.maxCitizens && G[selectedStation].currentCitizens > 0){
      G[selectedStation].currentCitizens++;
      G.village.currentCitizens--;
    }
  },
  removeCitizensFromAgrar(G, selectedStation, ctx){
    if(G[selectedStation].currentCitizens > 0){
      G[selectedStation].currentCitizens--;
      G.village.currentCitizens++;
    }
  }

  */
/*
  ProductionMoves: {
    addCitizensToAgrar(G, ctx){
      if(G.agrar.currentCitizens < G.agrar.maxCitizens && G.village.currentCitizens > 0){
        G.agrar.currentCitizens++;
        G.village.currentCitizens--;
      }

  },

  CultreMoves: {

  }
*/

}


export default VillageMoves;
