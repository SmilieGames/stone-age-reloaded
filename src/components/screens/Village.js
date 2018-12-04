import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h6" gutterBottom>
        { props.currentCitizens + ((props.maxCitizen)? " / " + props.maxCitizen : "") }
      </Typography>
    </Paper>
  )
}

const Village = (props) => {
  return (
    <Grid style={{ backgroundColor: 'lightGray' }} container spacing={0}>
      <Tile />
      <Tile>
        <StatusField label="Agrar" currentCitizens={props.G.agrar.currentCitizens} maxCitizen={props.G.agrar.maxCitizen}/>
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