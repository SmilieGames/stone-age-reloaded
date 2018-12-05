import React from 'react';

import Button from '@material-ui/core/Button';


export default class Tech extends React.Component {

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
      <Button disabled={!this.isClickable()} onClick={this.unlockTechnology} variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
          {this.props.label}
      </Button>
    )    
  }
}
