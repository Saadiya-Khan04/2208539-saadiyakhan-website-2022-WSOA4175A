import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Jupiter from '../assets/Images/Jupiter.png';

export default class jupiter extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Jupiter</h1>
        </div>

        <div className='bodyPlanets'>

                
                <p>
                <a href="https://solarsystem.nasa.gov/planets/jupiter/overview/" target="_blank" rel="noopener noreferrer">Explore Jupiter!</a>
                </p>
          
              <p>
              Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons 
              beyond Earth. That discovery changed the way we see the universe.
              </p>
              <p>
              Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as 
              all the other planets combined.
              </p>
              <p>
              Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of 
              hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.
              One spacecraft – NASA's Juno orbiter – is currently exploring this giant world.
              </p>
              
              <h2><i>All information from NASA Website.</i></h2>
              <img src={Jupiter} alt="Jupiter"/>
        </div>
    </div>
    )
  }
}
