import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import StoreIcon from '@material-ui/icons/Store';
import AutorenewIcon from '@material-ui/icons/Autorenew'
import SendIcon from '@material-ui/icons/Send'

import Village from './screens/village'

// Constants for the currently shown view (the indexes are used by the bottom navigation)
const Views = {
    Village: 0,
    Technology: 1,
    Buildings: 2,
    Evolution: 3
}

class StoneAgeRenderer extends Component {

  constructor(props){
    super(props)

    this.state = {
      currentView: Views.Village // set default view
    }

    this.onEndTurnButtonClicked = this.onEndTurnButtonClicked.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
  }


  onEndTurnButtonClicked(){
    this.props.moves.calculate();
    this.props.events.endTurn();
  }

  // switch case to choose the selected view and render it.
  renderScreen(){
      switch(this.state.currentView){
          case Views.Village:
            return <Village {...this.props}/>
      }
  }
  
  render() {
    return (
      <div className="App" style={{padding:'2%'}}>
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

        <div style={{height: '60vh'}}>
            { this.renderScreen() }
        </div>
        
        <BottomNavigation
          value={this.state.currentView}
          showLabels
        >
          <BottomNavigationAction label="Village"    icon={<HomeIcon />}     onClick={() => this.setState({currentView: Views.Village})} />
          <BottomNavigationAction label="Technology" icon={<BuildIcon/>}     onClick={() => this.setState({currentView: Views.Technology})} />
          <BottomNavigationAction label="Buildings"  icon={<StoreIcon/>}     onClick={() => this.setState({currentView: Views.Buildings})} />
          <BottomNavigationAction label="Evolution"  icon={<AutorenewIcon/>} onClick={() => this.setState({currentView: Views.Evolution})} />
          <BottomNavigationAction disabled />
          <BottomNavigationAction label="End Turn"   icon={<SendIcon style={{color:'green'}}/>} onClick={this.onEndTurnButtonClicked} />
        </BottomNavigation>
      </div>
    );
  }
}

export default StoneAgeRenderer;