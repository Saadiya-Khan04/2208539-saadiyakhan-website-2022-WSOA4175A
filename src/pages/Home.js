import React, { Component } from 'react';  
import '../styling/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>

        <div className='headercontainer'>

          <h1>Net Art</h1>
          <p>"Insert cool title here"</p>
        </div>

        <div className='bodyHome'>
          <h2>What Am I Doing?</h2>
          <p>
            Really not too sure about what I want to do yet
          </p>

          <h2>What is Net Art?</h2>
          <p>
            Explanation of what net art is with examples
          </p>
        </div>
          
      </div>
    )
  }
}

