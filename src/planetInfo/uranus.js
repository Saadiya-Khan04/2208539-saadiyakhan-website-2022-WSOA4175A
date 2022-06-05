import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Uranus from '../assets/Images/Uranus2.png';

export default class uranus extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Uranus</h1>
        </div>

        <div className='bodyPlanets'>

                <img src={Uranus} alt="Uranus"/>
                <p>
                <a href="https://solarsystem.nasa.gov/planets/uranus/overview/" target="_blank" rel="noopener noreferrer">Explore Uranus!</a>
                </p>
                <br></br>
              <p>
              Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. 
              It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, 
              although he originally thought it was either a comet or a star.
              </p>
              <p>
              It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer 
              Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, 
              the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​
              </p>

              <h2><i>All information from NASA Website.</i></h2>
        </div>
    </div>
    )
  }
}
