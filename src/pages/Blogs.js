import React, { Component } from 'react';
import '../styling/Blogs.css';
import {Link} from 'react-router-dom';

export default class Blogs extends Component {
  render() {
    return (
      <div className='blogs'>

        <div className='headerblogs'>

            <h1>Blogs</h1>
            <p>Critical Writing Pieces</p>
        </div>

        <div className='bodyblogs'>
        <h2>Rhizome Artbase</h2>
        <p>The Rhizome Artbase is an archive of digital artworks from 1999 to present day.
          <br></br> <br></br>
          David Carrier's, "The Work of Art in the Age of Mechanical Reproduction" <br></br>
          and Danae's, 
          "Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet" <br></br>
          is being used to analyse the Rhizome Artbase. 
        </p>
        <Link to='/NetArt'> Blog 1: Net/Web Art </Link>

        <hr></hr>

        
        <h2>Design and Aesthetics</h2>
        <p>Core principles of Design and Aesthetics.
          <br></br> <br></br>
          Lisbeth Thorlacius', "The Role of Aesthetics in Web Design" and Ji Yong Park's, <br></br>
          "Design principles for interactive user experience through net art" both mention Functionality
          <br></br>
          VS Aesthetics. They are key principles in Web Development. 
           
        </p>
        <Link to='/DesignAesth'> Blog 2: Core Principles of Design and Aesthetics </Link>

        <hr></hr>

        <h2>Internet, Society and Design Justice</h2>
        <p>Core issues around Internet, Society and Design Justice for the web.
          <br></br> <br></br>
           
           
        </p>
        <Link to='/DesignJustice'> Blog 3: Internet, Society and Design Justice </Link>

        <hr></hr>

        <h2>Reflection</h2>
        <p>Self-critique and assessment of practical progress and theoretical engagement.
          <br></br> <br></br>
           
           
        </p>
        <Link to='/Reflection'> Blog 4: Reflection </Link>

        <hr></hr>
            
        </div>

      </div>
    )
  }
}

