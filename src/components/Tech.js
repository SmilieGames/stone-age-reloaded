import React from 'react';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



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
    const { technologies, tech } = this.props;

    if(!!technologies[tech]){
      if(!this.isActive() && this.requirementsMet() && this.enoughResearchPoints()){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  isActive(){
    const { technologies, tech } = this.props;
    return technologies[tech].active;
  }

  requirementsMet(){
    const { technologies, tech } = this.props;

    let met = true;
    technologies[tech].requirements.forEach((req) => {
      if(!technologies[req].active){
        met = false;
        return false; // this only breaks the anonymous functions in the forEach
      }
    })
    return met;
  }

  enoughResearchPoints(){
    const { technologies, tech } = this.props;

    if(this.props.G.resources.researchPoints >= technologies[tech].cost){
      return true;
    }else{
      return false;
    }
  }

  unlockTechnology(){
    const { tech } = this.props;

    this.props.unlockFunction(tech)
  }

  render(){
    const { technologies, tech } = this.props;

    if(!technologies || !tech){
      return(
        <Button variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
            {tech}
        </Button>
      )
    }console.log(technologies, tech)
    return (
      <Tooltip title={technologies[tech].description}>
        <span>
          <Button disabled={!this.isClickable()} onClick={this.unlockTechnology} variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
              {(technologies[tech]? technologies[tech].label : tech)}
          </Button>
        </span>
      </Tooltip>
    )    
  }
}
