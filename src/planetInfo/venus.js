import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Venus from '../assets/Images/Venus.png';

export default class venus extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Venus</h1>
        </div>

        <div className='bodyPlanets'>

                <img src={Venus} alt="Venus"/>
                <p>
                <a href="https://solarsystem.nasa.gov/planets/venus/overview/" target="_blank" rel="noopener noreferrer">Explore Venus!</a>
                </p>
                <br></br>
              <p>
              Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, 
              terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. 
              These are not identical twins, however – there are radical differences between the two worlds.
              </p>
              <p>
              Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of 
              sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though 
              Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough 
              to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. 
              Scientists think it’s possible some volcanoes are still active.
              </p>
              <p>
              Venus has crushing air pressure at its surface – more than 90 times that of Earth – similar to the pressure you'd encounter 
              a mile below the ocean on Earth.
              Another big difference from Earth – Venus rotates on its axis backward, compared to most of the other planets in the solar system. 
              This means that, on Venus, the Sun rises in the west and sets in the east, opposite to what we experience on Earth. 
              (It’s not the only planet in our solar system with such an oddball rotation – Uranus spins on its side.)
              </p>

              <h2><i>All information from NASA Website.</i></h2>
        </div>
    </div>
    )
  }
}
