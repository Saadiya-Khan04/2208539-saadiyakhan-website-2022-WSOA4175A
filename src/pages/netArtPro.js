import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class netArtPro extends Component {
  render() {
    return (
        <div className='blogPosts'>

        <div className='linkLeft'>

        <a><Link to='/NetArtPrep'>=NetArt Prep</Link></a>
        </div>

        <div className='linkRight'>

        <a><Link to='/Reflection2'>Reflection 2=</Link></a>
        </div>


      <div className='headerBlogs'>
       <h1><i>Internet Artwork Prototype</i></h1>
       <p><i>Net Art Prototype and Discussion</i></p>
      </div>

      <div className='bodyBlogs'>
            <p>
              <u><i>Internet Artwork Prototype</i></u> <br></br>
              <br></br>
              My internet artwork displays all of the planets in our solar system, including the sun. These are displayed on floating circles 
              with images of each planet, as well as their names. So it is easy to differentiate between them. 
              I have stored the information in an array, the images and the planet names. It is a simple array. 
              The user can click on the name of the planets and will be taken to another page. There is some information about each planet, 
              and a link to the official NASA website that allows users to view a virtual model of the solar system. 
            </p>

            <p>
              <u><i>As An Artwork:</i></u> <br></br>
              <br></br>
            Personally, I believe that anything can be made into art. I see space as this lonely, quiet place. But it actually is not all that 
            lonely. It is full of many interesting planets, stars, galaxies etc. Being able to interact with these things can make them feel less 
            lonely. It made me realise that there will always be more things to question and explore and wonder about. 
            Learning about, exploring and interacting with these images can be seen as a form of art. It incorporates images and information. 
            The NASA solar system models that are linked on each planet’s page allow better interaction with each planet.  
            </p>

            <p>
              <u><i>Challenges:</i></u> <br></br>
              <br></br>
              I am not too sure if I want to stick with how I have made the planets interactable. Originally, they were going to be 
              interactable buttons that bring up a modal popup window with information. Due to time constraints, I couldn’t. 
              I’m also not too sure on how to place the buttons in the model of a solar system on my web page. 
              I also struggled with trying to format the image of Saturn, so it looks a bit off, compared to the rest of the planets. 
            </p>

            <p>
              <u><i>Analysis:</i></u> <br></br>
              <br></br>
              Looking at functionality vs aesthetics, I would say that my website is more aesthetic than functional. 
              I would personally change this by making a more responsive and floating navbar. In regards to the blog posts, 
              I believe that I have made them quite functional by adding buttons to scroll through the blogs, as well as laying them out 
              neatly in floating boxes. 
            </p>

            <p>
              <u><i>Final Iteration:</i></u> <br></br>
              <br></br>
              Instead of making the names of the planets interactable, I would like to make the entire image interactable. 
              It would be more user friendly, and look a lot better rather than links. I would still like to do the modal popups so that there 
              aren’t too many web pages that need to be displayed. The information is also very minimal on each page. 
            </p>
      </div>

      <div className='linkMid'>

        <a><Link to='/Blogs'>=Blogs=</Link></a>
      </div>

  </div>
    )
  }
}
