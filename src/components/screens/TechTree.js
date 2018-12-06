import React from 'react';

import Grid from '@material-ui/core/Grid';

import Tech from '../Tech';

const Tile = (props) => {
  return (
    <Grid item xs={1} style={{ height: '10vh', backgroundColor: ''}}>
      {props.children}      
    </Grid>
  )
}

/**
 * The tech tree is a 12x7 Grid of Tiles. Each Tile can contain one tech.
 */
const TechTree = (props) => {

  const data = {
    G: props.G,
    unlockFunction: props.moves.unlockTechnology,
    technologies: props.G.technologies
  }  

  return (
    <Grid container spacing={0} style={{ backgroundColor: 'lightGray', height: '600px', width: '1900px' }}>
      <Tile><Tech {...data} tech="gathering"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><Tech label="crude stone tools"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech label="hunting"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech {...data} tech="plants"/></Tile>
      <Tile/>
      <Tile><Tech label="use of fire"/></Tile>
      <Tile/>
      <Tile><Tech label="fur clothing"/></Tile>
      <Tile/>
      <Tile><Tech label="improved stone tools"/></Tile>
      <Tile><Tech label="primitive weapons"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech {...data} tech="advancedGathering"/></Tile>
      <Tile><Tech label="religion"/></Tile>
      <Tile/>
      <Tile><Tech label="buidling of fire"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><Tech label="thrown weapons"/></Tile>
      <Tile><Tech label="trapping"/></Tile>
      <Tile><Tech label="fishing"/></Tile>
      <Tile/>
      <Tile/>

      <Tile/>
      <Tile><Tech label="art"/></Tile>
      <Tile/>
      <Tile><Tech label="shelter"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech label="advanced stone tools"/></Tile>
      <Tile/>
      <Tile><Tech label="captive animals"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech label="agriculture"/></Tile>
      <Tile><Tech label="adorment"/></Tile>
      <Tile><Tech label="pottery"/></Tile>
      <Tile><Tech label="architecture"/></Tile>
      <Tile><Tech label="cloth outfit"/></Tile>
      <Tile/>
      <Tile><Tech label="component tools"/></Tile>
      <Tile><Tech label="ranged weapons"/></Tile>
      <Tile><Tech label="domest."/></Tile>
      <Tile><Tech label="fish hooks"/></Tile>
      <Tile/>
      <Tile/>

      <Tile/>
      <Tile><Tech label="barter"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech label="PALACE"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><Tech label="animal husbandry"/></Tile>
      <Tile><Tech label="fishing nets"/></Tile>
      <Tile/>
      <Tile/>
      
    </Grid>
  );
}

export default TechTree;