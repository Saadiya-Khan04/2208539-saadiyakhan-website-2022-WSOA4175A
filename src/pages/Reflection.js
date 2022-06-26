import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styling/allBlogs.css';


export default class Reflection extends Component {
  render() {
    return (
        <section className='blogPosts'>

        <section className='headerBlogs'>

          <div class="h-feed">
          
            <h1 class="p-name"><i>Reflection</i></h1>
            <p><i>Self-critique of practical progress and theoretical engagement</i></p>
          </div>
         
        </section>

        <article className='bodyBlogs'>
              <p class="p-summary">

                
              <u><i>Practical Progress</i></u> <br></br>
             
              I did not have a lot of problems, in terms of coding. Although, there are many things that I would have liked to add to my site. 
              I am having a bit of a hard time trying to grasp the concept of using props and state. I didn’t need to use it in my site for this assignment,
              as my navbar is very simple, and my site is very basic. Andre’s lectures really do help a lot, although I am a bit slow. 
              </p>
            
              <p>
              I don’t know what I want to add to my website yet, as net/web art. My original idea was that I display some of my original artworks there, 
              as well as talk about games. It would have been a personal blog, and after each game is discussed, I would draw something that closely resembles 
              a character or item from the game. Although, I saw that our sites cannot be holding places for artworks, so I am a bit lost.

              I decided to just stick to the requirements for this assignment, and add in as much as I can. I did try to focus on the theoretical aspects of this assignment, 
              but they were even more challenging.
              </p>
            
              <p>
              Personally, I do quite like the colours and fonts of my site at the moment because it is a different type of scheme that I wanted to try, 
              in comparison to my regular styling. The layout will be fixed eventually, where images are displayed cleanly, as well as boxes for the blog posts that have
              a slight animation effect.
              I do struggle with coding, as a whole, but I am excited to create different things. 
              </p>
            
              <p>
              <u><i>Theoretical Engagement</i></u>
              <br></br>
              The readings in this quarter were either interesting or very challenging. I genuinely did enjoy reading about Functionality VS Aesthetics, 
              as a web developer it is always interesting to understand why things should be a certain way.
              Although the Park reading did thoroughly confuse me, I did try to understand the basics of it. 
              The topic of Week 7, the internet, society and design injustice is a bit tricky. There are a lot of concepts to keep in mind, 
              and to take into consideration when it comes to issues such as the ones that are described.
              I did enjoy taking a look at the Rhizome Artbase, it was really interesting to look at internet art through the ages. It was slightly challenging in trying to 
              critically analyse and discuss it, looking through multiple different artworks and 
              trying to deduce if they had been referenced before or have made reference to existing artworks. 
              </p>
        </article>

          <div className='Links'>
              <div className='linkLeft'>

                <a><Link to='/DesignJustice'>Design Justice</Link></a>
                </div>

              <div className='linkRight'>

                <a><Link to='/NetArtPrep'>NetArt Prep</Link></a>
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

