import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Sun from '../assets/Images/Sun.png';

export default class sun extends Component {
  render() {
    return (
      <div className='planetPages'>

          <div className='headerContPlanets'>
                <h1>The Sun</h1>
          </div>

          <div className='bodyPlanets'>
                <p>
                <a href="https://solarsystem.nasa.gov/solar-system/sun/overview/" target="_blank" rel="noopener noreferrer">Explore The Sun!</a>
                </p>
                <p>
                Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. 
                The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, 
                life as we know it could not exist here on our home planet.
                </p>
                <p>
                The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. 
                Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris 
                in orbit around it. The hottest part of the Sun is its core, where temperatures top 27 million degrees Fahrenheit 
                (15 million degrees Celsius). The Sun’s activity, from its powerful eruptions to the steady stream of charged particles 
                it sends out, influences the nature of space throughout the solar system.
                </p>

                <h2><i>All information from NASA Website.</i></h2>
                <img src={Sun} alt="Sun"/>
          </div>
      </div>
    )
  }
}
