import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import StoreIcon from '@material-ui/icons/Store';
import AutorenewIcon from '@material-ui/icons/Autorenew'
import SendIcon from '@material-ui/icons/Send'

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
  }


  onEndTurnButtonClicked(){
    this.props.moves.calculate();
    this.props.events.endTurn();
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

        <Grid style={{backgroundColor: 'lightGray'}} container spacing={0}>
            <Tile/>
            <Tile>
                <Paper>Agrar</Paper>
            </Tile>
            <Tile/>
            <Tile>
                <Paper>Culture</Paper>
            </Tile>

            <Tile/>
            <Tile>
                <Paper >Fruits</Paper>
            </Tile>
            <Tile/>
            <Tile>
                <Paper >Stone</Paper>
            </Tile>

            <Tile>
                <Paper >Village</Paper>
            </Tile>
            <Tile>
                <Paper >Fishing</Paper>
            </Tile>
            <Tile/>
            <Tile/>
        </Grid>
        
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

const Tile = (props) => {
    return (
        <Grid item xs={3} style={{height: '20vh'}}>
            {props.children}
        </Grid>
    )
}

export default StoneAgeRenderer;