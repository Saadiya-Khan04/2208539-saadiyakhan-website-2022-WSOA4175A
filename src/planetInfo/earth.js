import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Earth from '../assets/Images/Earth.png';

export default class earth extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Earth</h1>
        </div>

        <div className='bodyPlanets'>
              
                
                <p>
                <a href="https://solarsystem.nasa.gov/planets/earth/overview/" target="_blank" rel="noopener noreferrer">Explore Earth!</a>
                </p>
            
              <p>
                  Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.
                  While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water 
                  on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, 
                  all of which are made of rock and metal.
              </p>
              <p>
              The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and 
              goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”
              </p>

              <h2><i>All information from NASA Website.</i></h2>
              <img src={Earth} alt="Earth"/>
        </div>
    </div>
    )
  }
}
