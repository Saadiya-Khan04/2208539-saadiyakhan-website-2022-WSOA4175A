import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Saturn from '../assets/Images/Saturn1.png'; 

export default class saturn extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Saturn</h1>
        </div>

        <div className='bodyPlanets'>

                
                <p>
                <a href="https://solarsystem.nasa.gov/planets/saturn/overview/" target="_blank" rel="noopener noreferrer">Explore Saturn!</a>
                </p>
               
              <p>
              Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.
              Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made 
              of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.
              </p>
              <p>
              Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.
              </p>

              <h2><i>All information from NASA Website.</i></h2>
              <img src={Saturn} alt="Saturn"/>
        </div>
    </div>
    )
  }
}
