import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Tile = (props) => {
  return (
    <Grid item xs={1} style={{ height: '10vh', backgroundColor: 'lightGray', zIndex: '-1' }}>
      {!!props.fromTop && (
        <div className="fromTop"/>
      )}
      {!!props.toBottom && (
        <div className="toBottom"/>
      )}
      {props.children}
      
    </Grid>
  )
}

const Tech= (props) => {
  return (  
    <Paper style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
      <Typography variant="body" gutterBottom>
        {props.label}
      </Typography>      
    </Paper>
  )
}

const TechTree = (props) => {
  return (
    <Grid container spacing={0}>
      <Tile toBottom><Tech label="gathering"/></Tile>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile><Tech label="crude stone tools"/></Tile>
      <Tile />
      <Tile />
      <Tile toBottom><Tech label="hunting"/></Tile>
      <Tile />
      <Tile />
      <Tile />

      <Tile fromTop toBottom><Tech label="plants"/></Tile>
      <Tile />
      <Tile><Tech label="use of fire"/></Tile>
      <Tile />
      <Tile fromTop toBottom><Tech label="fur clothing"/></Tile>
      <Tile />
      <Tile fromTop toBottom><Tech label="improved stone tools"/></Tile>
      <Tile fromTop toBottom><Tech label="primitive weapons"/></Tile>
      <Tile fromTop toBottom/>
      <Tile fromTop toBottom/>
      <Tile />
      <Tile />

      <Tile fromTop toBottom><Tech label="advanced gathering"/></Tile>
      <Tile toBottom><Tech label="religion"/></Tile>
      <Tile />
      <Tile toBottom><Tech label="buidling of fire"/></Tile>
      <Tile fromTop toBottom/>
      <Tile />
      <Tile fromTop toBottom/>
      <Tile fromTop toBottom><Tech label="thrown weapons"/></Tile>
      <Tile fromTop toBottom><Tech label="trapping"/></Tile>
      <Tile fromTop toBottom><Tech label="fishing"/></Tile>
      <Tile />
      <Tile />

      <Tile fromTop toBottom/>
      <Tile fromTop toBottom><Tech label="art"/></Tile>
      <Tile />
      <Tile fromTop toBottom><Tech label="shelter"/></Tile>
      <Tile fromTop toBottom/>
      <Tile />
      <Tile fromTop toBottom><Tech label="advanced stone tools"/></Tile>
      <Tile fromTop toBottom/>
      <Tile fromTop toBottom><Tech label="captive animals"/></Tile>
      <Tile fromTop toBottom/>
      <Tile />
      <Tile />

      <Tile fromTop toBottom><Tech label="agriculture"/></Tile>
      <Tile fromTop><Tech label="adorment"/></Tile>
      <Tile fromTop><Tech label="pottery"/></Tile>
      <Tile fromTop toBottom><Tech label="architecture"/></Tile>
      <Tile fromTop><Tech label="cloth outfit"/></Tile>
      <Tile />
      <Tile fromTop><Tech label="component tools"/></Tile>
      <Tile fromTop toBottom><Tech label="ranged weapons"/></Tile>
      <Tile fromTop toBottom><Tech label="domest."/></Tile>
      <Tile fromTop toBottom><Tech label="fish hooks"/></Tile>
      <Tile />
      <Tile />

      <Tile />
      <Tile><Tech label="barter"/></Tile>
      <Tile />
      <Tile />
      <Tile><Tech label="PALACE"/></Tile>
      <Tile />
      <Tile />
      <Tile />
      <Tile fromTop><Tech label="animal husbandry"/></Tile>
      <Tile fromTop><Tech label="fishing nets"/></Tile>
      <Tile />
      <Tile />
      
    </Grid>
  );
}

export default TechTree;