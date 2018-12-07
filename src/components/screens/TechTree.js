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
      <Tile><Tech {...data} tech="crudeStoneTools"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech {...data} tech="hunting"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech {...data} tech="plants"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="useOfFire"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="furClothing"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="improvedStoneTools"/></Tile>
      <Tile><Tech {...data} tech="primitiveWeapons"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech {...data} tech="advancedGathering"/></Tile>
      <Tile><Tech {...data} tech="science"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="buildingOfFire"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><Tech {...data} tech="thrownWeapons"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="fishing"/></Tile>
      <Tile/>
      <Tile/>

      <Tile/>
      <Tile><Tech {...data} tech="art"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="shelter"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech {...data} tech="advancedStoneTools"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>

      <Tile><Tech {...data} tech="agriculture"/></Tile>
      <Tile><Tech {...data} tech="advancedScience"/></Tile>
      <Tile><Tech {...data} tech="pottery"/></Tile>
      <Tile><Tech {...data} tech="architecture"/></Tile>
      <Tile><Tech {...data} tech="clothOutfit"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="componentTools"/></Tile>
      <Tile><Tech {...data} tech="rangedWeapons"/></Tile>
      <Tile/>
      <Tile><Tech {...data} tech="fishHooks"/></Tile>
      <Tile/>
      <Tile/>

      <Tile/>
      <Tile><Tech {...data} tech="barter"/></Tile>
      <Tile/>
      <Tile/>
      <Tile><Tech {...data} tech="palace"/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><Tech {...data} tech="fishingNets"/></Tile>
      <Tile/>
      <Tile/>
      
    </Grid>
  );
}

export default TechTree;