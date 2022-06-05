import React, { Component } from 'react';
import '../styling/SpaceArt.css';
import { planetList } from '../tools/planetList';
import PlanetDisplay from '../tools/planetDisplay';

export default class SpaceArt extends Component {
  render() {
    return (

        <div className='artPage'>

            <div className='headerContainerArt'>

                <h1><i>The Space Art</i></h1> 
            </div>

        <div className='bodyArt'>
        <div className='planetList'>
          {planetList.map((planetDisplay, value) => {

            return(

              <PlanetDisplay value={value} link={planetDisplay.link} image={planetDisplay.image}/>
            )
          })}

        </div>
        </div>
        </div>
    )
  }
}


