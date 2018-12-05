const AgrarMoves = {
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

export default AgrarMoves;