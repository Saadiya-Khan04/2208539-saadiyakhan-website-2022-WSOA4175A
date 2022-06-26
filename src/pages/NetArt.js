import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styling/allBlogs.css';


export default class NetArt extends Component {
  render() {
    return (
        <section className='blogPosts'>
          
        <section className='headerBlogs'>

             <div class="h-feed">
              <h1 class="p-name"><i>Rhizome Artbase</i></h1>
              <p><i>Critical Analysis of Net/Web Art</i></p>
             </div>
        </section>

        <article class="h-entry" className='bodyBlogs'>
            <p class="p-summary"> 
            Danae discusses the different types of web art and in a sense, how they have evolved in, 
            <u>“Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet.”</u> 
            Net art is network art, rather than internet art, which Danae describes as art that had been produced during the “Web 1.0” era. (Danae, 2019:1) 
            This specific era had no user interface and used static web pages, this had created the building blocks to the evolution of web/net art.  
            Post-internet art can be seen as net art that had been evolved from Net art, the difference being that this would then be created through “Web 2.0”. 
            Danae mentions that users could share information in real-time, also known as the dynamic interfaces. (Danae, 2019:3) 
            New Aesthetics can be seen as the current form of Net Art, due to the fact that it combines both physical and virtual artworks, 
            this will allow the reproduction of different artworks and allow people to experience these works easily.
            </p>
             
            <p>
            David Carrier makes use of <u>“The Work of Art in the Age of Mechanical Reproduction” (1936)</u>, 
            by Walter Benjamin, as a framework for his “The Work of Art in the Age of the Internet”. 
            David Carrier discusses how art has changed and become digitised, much like how Benjamin discusses art reproduction. (Carrier, 2020:1).
            When art is reproduced or displayed in different ways, it’s meaning can change, as well as the audience’s perspective on these specific artworks. 
            As Benjamin was saying, Aura is lost when art is reproduced. So internet artists will rather work for the sake of the internet, 
            rather than the aura and originality of creating an artwork. 
            </p>
            
            <p>
            Looking at the Rhizome Artbase website, it is evident that there are artworks that span over the past few decades.  
            Each of these artworks are made during certain eras of Net Art, therefore they portray the evolution of Net Art. 
            Danae’s discussion can aid in analysing the different artworks through the ages.
            </p>
            
            
            <p>
            In 1995, Heath Bunting created <u>“Untitled (Splash Page)”</u>, which is a basic, low resolution illustration that is in black and white. 
            This can easily be categorised as Net Art that had been created through Web 1.0 with its static pages and no user interface. 
            As we view the artwork now, it seems basic and unspecial, but it was one of the first few artworks created in the age of the internet. 
            Therefore, it can be seen as the building blocks for Net Art and our Post-internet Art.
            </p>
            
            <p>
            In 2006, Roch Forowicz created “Environment”, an artwork that allows members of that specific project to communicate with each other through phone, email or video. 
            This marked the beginning of artworks being created in Web 2.0 with its user interface and dynamic pages. This can be categorised as Post-internet art,
            due to the fact that there are dynamic pages, as well as the two way communication, as opposed to Web 1.0’s one way communication.
            </p>
            
            <p>
            In 2012, Porpentine created “Howling Dogs”, a hypertext game that puts the player in an enclosed area that they have to escape. 
            This is an example of New Aesthetics, due to the fact that it combines physical and virtual artworks.  
            In this case, the hypertext game can be viewed as an internet artwork, as well as a game. 
            </p>
            
            <p>
            Using the works of Danae and Carrier to analyse the Rhizome Artbase, it can be seen that Net Art has evolved drastically from just being Net Art to New Aesthetics. 
            With this evolution, artworks have been used as references to create new artworks, therefore the original artworks are not losing their value, 
            but rather inspiring people to create more net artworks. 
            These artists are creating art with their own personalised aura, while taking references and ideas from previous net artists. 
            </p>

            <p>
              Personally, I believe that art is created through inspiration that is gathered from existing artworks. Many artworks
              are used to create new artworks, these can be whole new artworks or even just an artwork with the representation of
              an exsiting one. This can create a community of artists who share similar likes, therefore expanding and bringing 
              attention to Net Art, as a whole. Net Art has evolved through practice, experimentation and the advancement of 
              technology from something as basic as a video chatroom to games made with text. 
            </p>
            
            <p>
            <u><i>References</i></u> <br></br>
            Carrier, D. (2020, May 16). The Work of Art in the Age of the Internet. Art, 1-13.<br></br>
            Danae. (2019, January 31). Net Art, Post-internet Art, New Aesthetics: The Fundamentals of Art on the Internet. Digital Art Weekly, 1-11.
            </p>
          
           
        </article> 


        <div className='Links'>
        <br></br>
           <div className='linkLeft'>

              <a><Link to='/Reflection'></Link></a>
              </div>

            <div className='linkRight'>

                <a><Link to='/DesignAesth'>Design Aesthetics</Link></a>
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
