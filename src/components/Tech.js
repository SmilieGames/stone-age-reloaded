import React from 'react';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


/**
 * Class that holds the logic and view for a technology in the tech tree view.
 * You must support the class with the following props:
 * G -> the Game object
 * technologies -> All available technologies as a hash (should be in the game object)
 * tech -> a string with the name of the technology, as present in the technologies hash
 */
export default class Tech extends React.Component {

  constructor(props){
    super(props);

    this.unlockTechnology = this.unlockTechnology.bind(this);
    this.isClickable = this.isClickable.bind(this);
    this.isActive = this.isActive.bind(this);
    this.requirementsMet = this.requirementsMet.bind(this);
    this.enoughResearchPoints = this.enoughResearchPoints.bind(this);
  }

  /**
   * returns if this object is clickable.
   * It is clickable if: the tech is not active, all requriements are active and the user has enough research points
   */
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
    // cicle all required techs. if any is not active, return false
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

  // call the unlock function with the tech name. this also triggers the enhancements that come with this tech.
  // TODO: right now the only thing blocking the user from activating a tech is the disabled button. should we add a separate check if the reqs are met in the unlock move?
  unlockTechnology(){
    const { tech } = this.props;

    this.props.unlockFunction(tech)
  }

  /**
   * All we render is a button, surrounded with a tooltip.
   * TODO: remove the first if clause completly, once all techs have been hooked up to the tech structure
   */
  render(){
    const { technologies, tech } = this.props;

    if(!technologies || !tech){
      return(
        <Button variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
            {this.props.label}
        </Button>
      )
    }console.log(technologies, tech)
    return (
      <Tooltip title={technologies[tech].description}>
        <div>
          <Button disabled={!this.isClickable()} onClick={this.unlockTechnology} variant="contained" style={{ marginTop: '10%', marginLeft: '20%', marginRight: '20%' }}>
              {(technologies[tech]? technologies[tech].label : tech)}
          </Button>
        </div>
      </Tooltip>
    )    
  }
}
