import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Neptune from '../assets/Images/Neptune.png';

export default class neptune extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Neptune</h1>
        </div>

        <div className='bodyPlanets'>

                
                <p>
                <a href="https://solarsystem.nasa.gov/planets/neptune/overview/" target="_blank" rel="noopener noreferrer">Explore Neptune!</a>
                </p>
              
              <p>
              Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.
              More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and 
              the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 
              1846.
              </p>
              <p>
              NASA's Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.
              </p>

              <h2><i>All information from NASA Website.</i></h2>
              <img src={Neptune} alt="Neptune"/>
        </div>
    </div>
    )
  }
}
