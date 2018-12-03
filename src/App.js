import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const StoneAge = Game({
  setup: () => ({
    currentCitizens: 8,
    maxCitizens: 12,
    food: 0,

    agrar: {
      currentCitizens: 0,
      maxCitizens: 10,
      foodProductionFactor: 2.0
    },

    factors: {
      foodConsumptionPerCitizen: 1.0
    }
  }),
  moves: {
    addCitizensToAgrar(G, ctx){
      if(G.agrar.currentCitizens < G.agrar.maxCitizens)
        G.agrar.currentCitizens ++;
    },
    removeCitizensFromAgrar(G, ctx){
      if(G.agrar.currentCitizens > 0)
        G.agrar.currentCitizens--;
    },
    calculate(G, ctx){

      // food production
      G.food = G.food + G.agrar.currentCitizens * G.agrar.foodProductionFactor;

      // food consumption
      for(let i = 0; i < G.currentCitizens; i++){
        if(G.food >= G.factors.foodConsumptionPerCitizen){
          G.food = G.food - G.factors.foodConsumptionPerCitizen;
        }else{
          G.currentCitizens = i + 1;
          break;
        }
      }
      
      // add people if food is left
      while(G.food >= 10 && G.currentCitizens <= G.maxCitizens){
        G.food -= 10;
        G.currentCitizens++;
      }

      // don't let food build up indefinitely. Otherwise you could hoard food and build houses later on and BOOM massive citizen rate in one turn.
      if(G.food > 10){
        G.food = 9;
      }
    }
  }
})


class StoneAgeRenderer extends Component {

  constructor(props){
    super(props)

    this.onEndTurnButtonClicked = this.onEndTurnButtonClicked.bind(this);
  }

  onEndTurnButtonClicked(){
    this.props.moves.calculate();
    this.props.events.endTurn();
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>            
            <TextField
              id="outlined-name"
              label="Population / Max Population"
              value={this.props.G.currentCitizens + " / " + this.props.G.maxCitizens}
              margin="normal"
              variant="outlined"
            />
          </Toolbar>

        </AppBar>
        <br/>
        
        <BottomNavigation
          value={0}
          showLabels
        >
          <BottomNavigationAction label="Village" icon={<HomeIcon />} />
          <BottomNavigationAction label="Technology" icon={<BuildIcon />} />
          <BottomNavigationAction label="Buildings" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Evolution" icon={<LocationOnIcon />} />
          <Button variant="contained" onClick={this.onEndTurnButtonClicked}>
            End Turn
          </Button>
        </BottomNavigation>
      </div>
    );
  }
}

const App = Client({
  game: StoneAge,
  board: StoneAgeRenderer,
  numPlayers: 1
})

export default App;
