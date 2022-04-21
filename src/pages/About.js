import React, { Component } from 'react';
import '../styling/About.css';
import AboutWire from '../assets/Wireframes/AboutPage.png';
import BlogsWire from '../assets/Wireframes/BlogsPage.png';
import HomeWire from '../assets/Wireframes/Homepage.png';
import IBlogsWire from '../assets/Wireframes/Individual Blogs.png';

export default class About extends Component {
  render() {
    return (
      <div className='about'>

          <div className='headerAbout'>
            <h1>About </h1>
            <p>Wireframes and Style Guide</p>
          </div>

          <div className='bodyAbout'>

              <div className='bodyWire'>
              <h2><u>Wireframes</u>:</h2>

                <p><u>Home Page:</u><br></br>
                <img src={HomeWire} alt="HomeWire"/></p>

                <p><u>About Page:</u><br></br>
                <img src={AboutWire} alt="AboutWire"/></p>

                <p><u>Blogs Page:</u><br></br>
                <img src={BlogsWire} alt="BlogsWire"/></p>

                <p><u>Individual Blogs Page:</u><br></br>
                <img src={IBlogsWire} alt="IBlogs"/></p>
              </div>

              <h2><u>Style Guide:</u></h2>
              <p>
                  <h3><u>Colour Choice:</u></h3>
                    The teal seems appealing and eye-catching. It's also something different that I wanted to try, <br></br>because my colour schemes are always black and red. <br></br>
                    The darker colours with the white text can make it easier on the eyes, because it's like a constant dark mode. <br></br>
                    The grey for the paragraphs make it easier to read, as well as differentiate between headings and paragraphs. 
              </p>

              <p>
                  <h3><u>Fonts Used:</u></h3>
                    The main headings are Arial, as this is bold and stands out as a main heading. <br></br>
                    I also used Arial for the main blogs paragraphs, it is easy to read in a long paragraph. <br></br>
                    The links on the blog page are Trebuchet MS, I did this so that they differ from the other fonts and are bold. 
              </p>

              <p>
                  <h3><u>Layout:</u></h3>
                    I am still currently working on the layout of most things on the site. Firstly, I would like to add images and more text on the home page, <br></br> 
                    to better explain the site. I don't know what I am doing with my site as yet, like what Net Art I would like to do. So I just started up my site. <br></br>
                    I would also like to display my blogs in boxes that float, and when clicked on, it takes you to the entire blog.<br></br>
                    Paragraphy layout will be easier to read. For the next assignment, I would also like to change the layout of the wireframes on the About page. <br></br>
                    The contact page is blank, I would like to set up different accounts for this specific site. <br></br>
                    The footer might also have contact icons, I'm not too sure about what I want to add to it yet. <br></br>
                    I will also be adding next and back buttons to the blogs, so navigation is easier. <br></br>
                    The Navbar will be more responsive and be more aesthetic for the next assignment.
                    <br></br>
              </p>

                
          </div>

      </div>
    )
  }
}
