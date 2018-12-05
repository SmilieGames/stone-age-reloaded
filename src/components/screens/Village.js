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


const StatusField = (props) => {
  return (
    <Paper style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
      <Typography variant="h5" gutterBottom>
        {props.label}
      </Typography>
      
      <Typography variant="h6" gutterBottom style={{paddingBottom: "5%"}}>
        {/** Check if function to remove a citizen exists in props. If yes, add button and assign onClick */}
        {!!props.removeFunction && (
          <Button style={{marginRight: "4%"}} variant="contained" size="small" onClick={props.removeFunction}>-</Button>
        )}
        {/** Always render the current citizens. Only render the max citizens in applicable */}
        { props.currentCitizens + ((props.maxCitizen)? " / " + props.maxCitizen : "") }
        {/** Check if function to add a citizen exists in props. If yes, add button and assign onClick */}
        {!!props.addFunction && (
          <Button style={{marginLeft: "4%"}} variant="contained" size="small" onClick={props.addFunction}>+</Button>
        )}
        
      </Typography>
    </Paper>
  )
}

const Village = (props) => {
  return (
    <Grid style={{ backgroundColor: 'lightGray' }} container spacing={0}>
      <Tile />
      <Tile>
        <StatusField 
          label="Agrar" 
          currentCitizens={props.G.agrar.currentCitizens} 
          maxCitizen={props.G.agrar.maxCitizens}
          removeFunction={props.moves.removeCitizensFromAgrar}
          addFunction={props.moves.addCitizensToAgrar}/>
      </Tile>
      <Tile />
      <Tile>
        <StatusField label="Culture"/>
      </Tile>

      <Tile />
      <Tile>
        <StatusField label="Fruits"/>
      </Tile>
      <Tile />
      <Tile>
        <StatusField label="Stone"/>
      </Tile>

      <Tile>
        <StatusField label="Village" currentCitizens={props.G.village.currentCitizens}/>
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