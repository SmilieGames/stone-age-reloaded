import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const Tile = (props) => {
  return (
    <Grid item xs={1} style={{ height: '10vh', backgroundColor: ''}}>
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

class Tech extends React.Component {

  constructor(props){
    super(props);

    this.unlockTechnology = this.unlockTechnology.bind(this);
    this.isClickable = this.isClickable.bind(this);
    this.isActive = this.isActive.bind(this);
    this.requirementsMet = this.requirementsMet.bind(this);
    this.enoughResearchPoints = this.enoughResearchPoints.bind(this);
  }

  isClickable(){
    if(!!this.props.tech){
      if(!this.isActive() && this.requirementsMet() && this.enoughResearchPoints()){
        return true;
      }else{
        return false;
      }
    }
  }

  isActive(){
    return this.props.tech.active;
  }

  requirementsMet(){
    this.props.tech.requirements.forEach((req) => {
      if(!this.props.G.technologies[req].active){
        return false;
      }
    })
    return true;
  }

  enoughResearchPoints(){
    if(this.props.G.resources.researchPoints >= this.props.tech.cost){
      return true;
    }else{
      return false;
    }
  }

  unlockTechnology(){
    this.props.unlockFunction(this.props.label)
  }

  render(){
    return (  
      <Button disabled={this.isClickable()} onClick={this.unlockTechnology} variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
          {this.props.label}
      </Button>
    )    
  }
}

const TechTree = (props) => {
  return (
    <Grid container spacing={0}>
      <Tile toBottom><Tech G={props.G} unlockFunction={props.moves.unlockTechnology} tech={props.G.technologies.gathering} label="gathering"/></Tile>
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

      <Tile fromTop toBottom><Tech G={props.G} tech={props.G.technologies.plants} label="plants"/></Tile>
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