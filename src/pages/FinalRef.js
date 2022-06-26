import React, { Component } from 'react';
import '../styling/allBlogs.css';
import {Link} from 'react-router-dom';

export default class FinalRef extends Component {
  render() {
    return (
        <section className='blogPosts'>

        <section className='headerBlogs'>

          <div class="h-feed">
            <h1 class="p-name"><i>Final Internet Artwork Rationale</i></h1>
            <p><i>What, Why and How of my Internet Artwork</i></p>
          </div>
            
        </section>

        <article className='bodyBlogs'>
                
            <p class="p-summary">
            <h2><u>What is my Internet Artwork:</u></h2>
             My internet artwork is quite simple, yet also somewhat informative. It contains 9 floating circles with images and links 
             of the planets in our solar system and the sun. The links are interactive and take the user to another page, which 
             contains information about that specific planet, a link to the NASA site and an image of that planet. 
            </p>    

            <p>
            The link to the NASA site has information about the planet that was clicked on, as well as a model of that planet. 
            Users can explore a 360 degree view of that planet and view its position in the milky way.  
            </p>  

            <p>
            It is a very simple version of the NASA site, without the model of the planets. As mentioned in the Internet Artwork Prototype blog, 
            I wanted to create a fun, interactive site, but more simple to navigate through than NASA’s. Although NASA's is well designed, 
            mine focuses on just our planets and the sun. 
            </p>  

            <p>
            <h2><u>Rationale:</u></h2>
            Originally, I wanted to make the internet art like the stellarium website. It would have been an interactive map of 
            all of the stars and planets in the milky way. This idea became quite challenging when trying to implement it. 
            I could not find any API’s and it proved somewhat challenging to place interactive buttons around the web page to 
            act as the individual stars and planets. 
            </p>   

            <p>
             Then I decided to just create the model of our solar system with the rings, and a few of our well-known stars. 
             This also proved to be slightly challenging because I did not know how to plot the interactive buttons on specific points 
             on the webpage. Therefore creating just the planets in the floating circles seemed more achievable, it also allowed me to 
             focus more on the creativity and the theoretical side of my site.
            </p>

            <p>
            Regarding the theory sections of our course, I quite enjoyed engaging with the functionality vs aesthetics readings and research. 
            From that theory section and through motivation, I decided that I wanted to make a website that is both functional and 
            aesthetically pleasing, although it is more aesthetics than functional. The research regarding internet artwork also 
            played a big role, while engaging with the Rhizome Artbase, it gives you perspective that anything can be art
            </p>

            <p>
            I would like the audience to experience how beautiful and fascinating space can be. I am genuinely passionate about 
            all things that relate to outer space, as it is a beautiful and vast place. Personally, I believe that people scroll through 
            websites to waste time, or they tend to look at things that are trending because of their fear of missing out. 
            A lot of people also tend to judge people that are constantly online because they believe that they are wasting time. 
            So why not make something that is beautiful, interactive and informative. I believe that so many people are so worried about 
            what’s happening online about things on Earth, they forget how interesting outer space can be.
            </p>

            <p>
            Art is subjective, and I believe that anything can be made into an artwork, especially if you are passionate about it, 
            even if it involves learning. As an artwork, I see space as this lonely, quiet place. But it actually is not all that lonely. 
            It is full of many interesting planets, stars, galaxies etc. Being able to interact with these things can make them 
            feel less lonely. It made me realise that there will always be more things to question and explore and wonder about. 
            Learning about, exploring and interacting with these images can be seen as a form of art.
            </p>

            <p>
            I think that space, as a whole, is its own massive artwork in itself. It is vast, colourful, dark, cold, and warm. 
            It is everything and nothing, all at once. And that has meaning, it feels like the impossible, yet it is out there. 
            </p>

            <p>
              <h2><u>Reflection:</u></h2>
              Although my net art ideas have changed quite a bit over time, I do quite like the way that it turned out. 
              I still managed to keep it as an interactive artwork that also informs, and allows users to engage with information. 
              Personally, I believe that it failed in certain aspects. Firstly, I genuinely did want it to be somewhat of a replica 
              of the stellarium website. This was more engaging, as well as aesthetically pleasing, it would have been everything that 
              I wanted as an internet artwork. My idea is more simplistic, where users can only interact with the planets.
            </p>

            <p>
            There also would have been modal pop ups that inform the user about each item that is clicked, instead of taking them to another page.
            This would have been both more aesthetic and more functional. There would be less pages to navigate through, as well as still 
            looking like a whole artwork, rather than feeling isolated with the way that it is now. 
            </p>

            <p>
            I also would have liked to use the NASA API that takes images from the NASA picture of the day database, 
            and to display it on my site. I don’t really like working with API’s, but also, it didn’t really feel like an artwork 
            to just be displaying images on the site, although I would have liked to have it on my site.
            </p>

            <p>
            I also would have liked to make the images of the planets interactive, when clicked on, they would have a slight animation 
            like a shake or slide. It also would have been nice to add small interactive particles around the site, to imitate stars. 
            </p>

            <p>
            Personally, I feel like there are many more things I could add to make the net art more interactive, but for now I would 
            like to keep it simple until I get better at ReactJS. I am quite pleased with my site and the creativity behind it, 
            I got to create something by using a theme that I thoroughly enjoy learning about and turning it into an artwork.
            </p>
        </article>

        <div className='Links'>
            <div className='linkLeft'>

              <a><Link to='/TechRef'>Tech Reflection</Link></a>
              </div>

            <div className='linkRight'>

              <a><Link to='/NetArt'>NetArt</Link></a>
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
