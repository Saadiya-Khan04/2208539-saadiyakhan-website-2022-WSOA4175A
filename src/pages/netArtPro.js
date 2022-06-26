import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class netArtPro extends Component {
  render() {
    return (
        <section className='blogPosts'>

      <section className='headerBlogs'>

        <div class="h-feed">
          <h1 class="p-name"><i>Internet Artwork Prototype - Assignment 2</i></h1>
          <p><i>Net Art Prototype and Discussion</i></p>
        </div>
       
      </section>

      <article className='bodyBlogs'>
            <p class="p-summary">
              <u><i>Internet Artwork Prototype - Assignment 2</i></u> <br></br>
              <br></br>
              My internet artwork displays all of the planets in our solar system, including the sun. These are displayed on floating circles 
              with images of each planet, as well as their names. So it is easy to differentiate between them. 
              I have stored the information in an array, the images and the planet names. It is a simple array that stores basic information. 
              The user can click on the name of the planets and will be taken to another page. There is some information about each planet, 
              and a link to the official NASA website that allows users to view a virtual model of the solar system and each individual
              planet. It is very simple, yet easy to navigate through. 
            </p>

            <p>
              <u><i>As An Artwork:</i></u> <br></br>
              <br></br>
            Personally, I believe that anything can be made into art. 
            Learning about, exploring and interacting with these images can be seen as a form of art. It incorporates images and information.           
            The NASA solar system models that are linked on each planet’s page allow better interaction with each planet.  
            </p>
            <p>
            I believe that learning through images and being able to explore models of certain items can be seen as a form of art. 
            It does not always have to be boring when educating yourself, and art can have a purpose in helping people, not just being admired. 
            </p>

            <p>
              <u><i>Challenges for Assignment 2:</i></u> <br></br>
              <br></br>
              I am not too sure if I want to stick with how I have made the planets interactable. Originally, they were going to be 
              interactable buttons that bring up a modal popup window with information. 
              I’m also not too sure on how to place the buttons in the model of a solar system on my web page. 
              I also struggled with trying to format the image of Saturn, so it looks a bit off, compared to the rest of the planets. 
            </p>

            <p>
              <u><i>Analysis:</i></u> <br></br>
              <br></br>
              Looking at functionality vs aesthetics, I would say that my website is more aesthetic and functional, rather than technical. 
              When I started out this website, I wanted to explore aesthetics mainly. This would entail working on the UI/UX aspects. 
              This is a learning curve for me because I would like to focus on the aesthetics and design of a website, while also making it functional 
              for the user. Although I am not well versed in the technical side, and I would like to improve, I do enjoy making easy websites for users, 
              while still having that creative and interesting side to it. 
            </p>

            <p>
              <u><i>Final Iteration for Assignment 2:</i></u> <br></br>
              <br></br>
              Instead of making the names of the planets interactable, I would like to make the entire image interactable. 
              It would be more user friendly, and look a lot better rather than links. I would still like to do the modal popups so that there 
              aren’t too many web pages that need to be displayed. The information is also very minimal on each page. I would also make a more 
              responsive and floating navbar. In regards to the blog posts, I believe that I have made them quite functional by adding buttons to 
              scroll through the blogs, as well as laying them out neatly in floating boxes. 
            </p>
      </article>

        <div className='Links'>
            <div className='linkLeft'>

              <a><Link to='/NetArtPrep'>NetArt Prep</Link></a>
              </div>

            <div className='linkRight'>

                <a><Link to='/Reflection2'>Reflection 2</Link></a>
                </div>
              <div className='linkMid'>

                <a><Link to='/Blogs'>Blogs</Link></a>
                </div>
        </div>
      <br></br>

  </section>
    )
  }
}
