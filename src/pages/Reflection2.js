import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';

export default class Reflection2 extends Component {
  render() {
    return (
        <div className='blogPosts'>

        <div className='linkLeft'>

        <a><Link to='/NetArtPro'>=NetArt Prototype</Link></a>
        </div>

        <div className='linkRight'>

        <a><Link to='/NetArt'>NetArt=</Link></a>
        </div>


      <div className='headerBlogs'>
       <h1><i>Reflection - Assignment 2</i></h1>
       <p><i>Self-critique on Assignment 2</i></p>
      </div>

      <div className='bodyBlogs'>
            <p>
              <u><i>Practical Progress</i></u> <br></br>
              <br></br>
              There is a lot more that I would have liked to add to this iteration, but I did have a few constraints. 
              In this Assignment, I added my Net art, which are floating circles that display the different planets. 
              I added props to my website, because I did not in the previous one. 
              I spoke about wanting to change my navbar, I have not in this assignment but I would like to for the final iteration. 
              The navbar will move with the page, and be slightly more interactive. I also want to change the interaction of the planets. 
              Instead of using the planet names as links to interact, I would like to either add buttons or make the images interactable. 
              I would also like to add more NASA stuff, but it depends on how much time I have for the Final Exam. 
              I will add buttons to be able to scroll through the planets instead of going back to the netart page.
              Also, need to fix the image of Saturn on the Netart page. 
            </p>

            <p>
              <u><i>Theoretical Progress</i></u> <br></br>
              <br></br>
              I focused more on the UI and Net art for this Assignment. I did not manage to edit and change the older blogs, 
              but I will do so for the next Assignment. 
              For now, I have added my internet artwork prep and prototype documents, as well as this reflection. 
              I would like to edit my internet, society and design justice blog by adding more of my own research. 

            </p>
      </div>

      <div className='linkMid'>

        <a><Link to='/Blogs'>=Blogs=</Link></a>
      </div>

  </div>
    )
  }
}
