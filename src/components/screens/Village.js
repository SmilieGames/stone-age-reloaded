import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Tile = (props) => {
  return (
    <Grid item xs={3} style={{ height: '20vh' }}>
      {props.children}
    </Grid>
  )
}


class StatusField extends React.Component {

  handleRemove(){
    this.props.removeFunction(this.props.station);
  }

  handleAdd(){
    this.props.addFunction(this.props.station);
  }

  render() {    
    return (
      <Paper hidden={!this.props.visible} style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
        <Typography variant="h5" gutterBottom>
          {this.props.label}
        </Typography>
        
        <Typography variant="h6" gutterBottom style={{paddingBottom: "5%"}}>
          {/** Check if function to remove a citizen exists in this.props. If yes, add button and assign onClick */}
          {!!this.props.removeFunction && (
            <Button style={{marginRight: "4%"}} variant="contained" size="small" onClick={this.handleRemove.bind(this)}>-</Button>
          )}
          {/** Always render the current citizens. Only render the max citizens in applicable */}
          { this.props.currentCitizens + ((this.props.maxCitizen)? " / " + this.props.maxCitizen : "") }
          {/** Check if function to add a citizen exists in this.props. If yes, add button and assign onClick */}
          {!!this.props.addFunction && (
            <Button style={{marginLeft: "4%"}} variant="contained" size="small" onClick={this.handleAdd.bind(this)}>+</Button>
          )}
          
        </Typography>
      </Paper>
    )
  }
}

const Village = (props) => {
  return (
    <Grid style={{ backgroundColor: 'lightGray', height: '600px', width: '1900px' }} container spacing={0}>
      <Tile />
      <Tile>
        <StatusField 
          label="Agrar" 
          currentCitizens={props.G.agrar.currentCitizens} 
          maxCitizen={props.G.agrar.maxCitizens}
          visible={props.G.agrar.active}
          removeFunction={props.moves.removeCitizens}
          addFunction={props.moves.addCitizens}
          station="agrar"/>
      </Tile>
      <Tile />
      <Tile>
        <StatusField label="Culture"/>
      </Tile>

      <Tile />
      <Tile>
        <StatusField 
          label="Fruits" 
          currentCitizens={props.G.fruits.currentCitizens} 
          maxCitizen={props.G.fruits.maxCitizens}
          visible={props.G.fruits.active}
          removeFunction={props.moves.removeCitizens}
          addFunction={props.moves.addCitizens}
          station="fruits"/>
      </Tile>
      <Tile />
      <Tile>
        <StatusField label="Stone"/>
      </Tile>

      <Tile>
        <StatusField
          label="Village" 
          currentCitizens={props.G.village.currentCitizens}
          visible={true}
          station="village"/>
      </Tile>
      <Tile>
        <StatusField label="Fishing"/>
      </Tile>
      <Tile />
      <Tile />
    </Grid>
  );
}

export default Village;