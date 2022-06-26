import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Mercury from '../assets/Images/Mercury.png';

export default class mercury extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Mercury</h1>
        </div>

        <div className='bodyPlanets'>

                  
                <p>
                <a href="https://solarsystem.nasa.gov/planets/mercury/overview/" target="_blank" rel="noopener noreferrer">Explore Mercury!</a>
                </p>
                <p>
                The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.
                <br></br>
                From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, 
                and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet 
                in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.
                </p>
                <p>
                Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset.
                </p>

                <h2><i>All information from NASA Website.</i></h2>
                <img src={Mercury} alt="Mercury"/>

        </div>
    </div>
    )
  }
}
