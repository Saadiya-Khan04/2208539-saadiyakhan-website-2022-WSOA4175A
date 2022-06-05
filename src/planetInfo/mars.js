import React, { Component } from 'react';
import '../styling/allPlanets.css';
import Mars from '../assets/Images/Mars.png';

export default class mars extends Component {
  render() {
    return (
        <div className='planetPages'>

        <div className='headerContPlanets'>
              <h1>Mars</h1>
        </div>

        <div className='bodyPlanets'>

                <img src={Mars} alt="Mars"/>
                <p>
                <a href="https://solarsystem.nasa.gov/planets/mars/overview/" target="_blank" rel="noopener noreferrer">Explore Mars!</a>
                </p>
                <br></br>
              <p>
              Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.
              </p>
              <p>
              Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the 
              alien landscape.
              NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) 
              exploring the surface of Mars.
              </p>
              <p>
              Perseverance rover – the largest, most advanced rover NASA has sent to another world – touched down on Mars on Feb. 18, 2021, 
              after a 203-day journey traversing 293 million miles (472 million kilometers). The Ingenuity helicopter rode to Mars attached to 
              the belly of Perseverance.
              Perseverance is one of three spacecraft that arrived at Mars in 2021. The Hope orbiter from the United Arab Emirates arrived on 
              Feb. 9, 2021. China’s Tianwen-1 mission arrived on Feb. 10, 2021, and includes an orbiter, a lander, and a rover. 
              Europe and India also have spacecraft studying Mars from orbit.
              </p>

              <h2><i>All information from NASA Website.</i></h2>
        </div>
    </div>
    )
  }
}
