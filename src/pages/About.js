import React, { Component } from 'react';
import '../styling/About.css';
import BlogsWire from '../assets/Wireframes/Blogs.png';
import HomeWire from '../assets/Wireframes/Home.png';
import NetArtWire from '../assets/Wireframes/NetArt.png';
import IBlogsWire from '../assets/Wireframes/BlogPages.png';

export default class About extends Component {
  render() {
    return (
      <div className='about'>

          <div className='headerAbout'>
            <h1><i>Behind The Space</i></h1>
          </div>
          

          <div className='bodyAbout'>

              <h2><u>Style Guide:</u></h2>
              <p>
                  <h3><u>Colour Choice:</u></h3>
                    Considering that I am going for a space theme, the colours that come to mind are purples, blues, black and white. They work well and can stand 
                    out when used together. They also remind me of nebulas and gas clouds in space. 
              </p>

              <p>
                  <h3><u>Font Used:</u></h3>
                    If I'm not mistaken, I only used Segoe UI, for headings and paragraphs. I started liking this font quite recently, as it seems more readable than the others when put on a 
                    darker background. It also looks quite elegant in italics. 
              </p>

              <p>
                  <h3><u>Layout:</u></h3>
                    I have implemented a lot more since the last assignment. I decided to keep the home page minimal, with a larger header image. I have also displayed my blogs in 
                    floating boxes, with a link to the entire blog. I wanted to implement this in my last assignment. I added it so that I can also include it with my states and props. 
                    I formatted my paragraphs a bit better, so they don't strain the user's eyes by reading sentences that go all the way across the screen. As well as starting paragraphs from
                    the left side, rather than the middle. 
                    
                    The footer would have contact icons, but I did not want to link my social media to it yet. 
                    I have added links on each blog page, so it is easier to scroll through the blogs, and go back to the blogs main page. Originally, I did want to make the navbar 
                    more responsive with a logo, but I quite like the simplicity of it, as it is now. 
                    <br></br>
              </p>

              <p>
                <u><i>References:</i></u> <br></br>
                <br></br>
                <u>Images:</u> <br></br>
                <br></br>
                <a href="https://www.esa.int/" target="_blank" rel="noopener noreferrer">https://www.esa.int/</a>
                <br></br>
                <a href="https://www.pngwing.com/" target="_blank" rel="noopener noreferrer">https://www.pngwing.com/</a>
                <br></br>
                <br></br>
                <u>Info:</u> <br></br>
                <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">https://www.nasa.gov/</a>
              </p>

              <div className='bodyWire'>
              <h2><u>Wireframes</u>:</h2>

              <br></br>
                <p><u>Home Page:</u><br></br>
                <img src={HomeWire} alt="HomeWire"/></p>

                <p><u>NetArt Page:</u><br></br>
                <img src={NetArtWire} alt="NetArtWire"/></p>

                <p><u>Blogs Page:</u><br></br>
                <img src={BlogsWire} alt="BlogsWire"/></p>

                <p><u>Individual Blogs Page:</u><br></br>
                <img src={IBlogsWire} alt="IBlogs"/></p>
              </div>

          </div>

          
              
          </div>
    )
  }
}
