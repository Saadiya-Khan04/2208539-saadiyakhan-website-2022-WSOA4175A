import React, { Component } from 'react';
import '../styling/allBlogs.css';
import {Link} from 'react-router-dom';

export default class DesRef extends Component {
  render() {
    return (
      <section className='blogPosts'>

        <section className='headerBlogs'>

          <div class="h-feed">
            <h1 class="p-name"><i> Exam Design Reflection</i></h1>
            <p><i>In-depth design reflection about website and the process</i></p>
          </div>
            
        </section>

        <article className='bodyBlogs'>
                
            <p class="p-summary">
            <h2><u>Design Choices:</u></h2>
            <h3><u><i>Colour Scheme:</i></u></h3>
            My colour scheme for this assignment is made up of 6 colours: Blue, Purple, Black, Grey, White and a very dark Blue-Grey. 
            When thinking about space, if I were to assign colours to it, I often imagine these 6 colours, due to the gaseous clouds of 
            nebulae, as well as the different planets and stars. Considering that my website’s theme is outer space and planets, 
            I believe that these colours fit in well.
            </p>

            <p>
            Black: This is for the footer, to stand out against the dark background.
            </p>

            <p>
            Purple: The buttons at the bottom of the individual blog pages. This incorporates a light purple into a dark background. 
            It is a visible contrast. 
            </p>

            <p>
            Blue: The links to different websites and the links on the navigation bar are blue. This contrasts well against the dark 
            navigation bar, as well as the background, while still keeping within the colour scheme.
            </p>

            <p>
            White: The headings and the home page make use of white text because it is easier to read on the dark background. 
            </p>

            <p>
            Grey: This is for the main paragraphs in the blogs and the Net Art information. 
            It can be easily differentiated from the headings, and can still be easier to read. Personally, 
            I believe that grey text on a dark background can be less straining on the eyes than white. 
            </p>

            <p>
            Dark Blue-Grey: This is the main background colour of the pages across the entire site. 
            It is a bit lighter and better than using black as it can be an overwhelming colour and keep the reader’s eye drawn to it. 
            Therefore, it is better to use less black. The blue-grey was close to black, so it is not too overwhelming and it goes with the 
            colour scheme. 
            </p>

            <p>
            <h3><u><i>Font choices:</i></u></h3>
            If I am not mistaken, I use one font style across the entire website, even for headings. 
            'Segoe UI', Tahoma, Geneva, Verdana, sans-serif. The sub-headings use the same font, although it is italicised. 
            I like this font because it feels well spaced out and easy to read because it is not too fancy, neither is it blocky. 
            It also looks quite nice when it is italicised. 
            </p>

            <p>
            <h3><u><i>Layout:</i></u></h3>
            I have learned how to lay out my paragraphs in a way that is not too cramped, yet it does not make the user strain their 
            eyes by reading sentences that stretch across the page. There is a considerable amount of space between headings and paragraphs, 
            as well as images. 
            </p>

            <p>
            For the blogs page, they are displayed in floating boxes, this helps in organising them and keeping the screen less crowded due 
            to minimal text shown for each blog. It also contains images from the hubble telescope, so it keeps with the outer space theme.    
            </p>

            <p>
            The Net Art page makes use of the same floating boxes, but they are circles. This allows the user to differentiate between the 
            different planets and display images, which aids in aesthetics.    
            </p>

            <p>
            <h2><u>Breakdown of each page:</u></h2> 
            <h3><u><i>Home:</i></u></h3> 
            I used a huge banner image for emphasis on the site and to display the heading. I quite like the static image, 
            it looks better than having multiple images for the home page. The text underneath the image is minimal and introduces the site 
            in a funny and light-hearted way. 
            </p>

            <p>
            <h3><u><i>Net Art:</i></u></h3>  
            There are floating boxes, which are circular. These provide the name of the planet and an image of it. 
            This was an easy way to depict the planets and be able to navigate to the corresponding page with information about that planet. 
            The names of the planets are links that take the user to the information page of the planet that was clicked on. 
            The links are a light blue because they are easier to read on the dark background
            </p>

            <p>
            <h3><u><i>Blogs:</i></u></h3>
            Floating boxes display each blog post, with a heading, an image and a link. I decided to do it this way because it 
            looks much neater to display the boxes with the basic information rather than paragraphs of information. 
            The paragraphs are for the individual blogs, so there is less unnecessary reading for the user. 
            I also wanted to keep up with the space theme, so I used images from the Hubble Telescope for the blog cover images. 
            I feel like this breaks up the amount of information that is spread out across the site and makes it aesthetically pleasing.
            </p>

            <p>
            <h3><u><i>Individual Blog Pages:</i></u></h3>
            This is a simple page of text. The blogs are split into paragraphs with a reference list at the end. I added 3 buttons at the bottom, 
            these are for navigating easily through the different blog posts, as well as going back to the blogs page with all of the blogs 
            being displayed in boxes.   
            </p>

            <p>
            <h3><u><i>Why/How:</i></u></h3>   
            This is my style guide with my wireframes. It has a basic reflection of my design choices throughout the site, and my 
            new wireframes for my exam iteration. I have also included my reference list for images and information. 
            </p>

            <p>
            <h2><u>Design Progress:</u></h2>  
            I have made quite a few changes to the design of my website. In the first iteration of my site, 
            I displayed the blogs through just paragraphs of text instead of using the floating boxes to display them neatly, 
            and it was a lot of unnecessary reading for the user. The colour scheme was originally just different shades of blue, 
            and using treal for the banner. My colour scheme is now the 6 colours that I have mentioned earlier. 
            </p>

            <p>
            My wireframes have changed through each iteration, although mainly just the colour scheme, the layout of the blog boxes and the 
            Net Art page. Originally for the Net Art page, I wanted to create a replica of the solar system with the planets and a few of our 
            well-known stars. This was a bit challenging because I had to place buttons in different, specific points on the page, and this was 
            slightly challenging to style. Therefore, I changed it to a grid format and added the planets using the circular floating boxes.    
            </p>

            <p>
            Lastly, I changed the colour of the links and the positioning of the buttons in the blogs. The colour of the links were a dark purple, 
            this blended in with the dark background and made it harder to see where the links were positioned. I changed the links to a 
            lighter blue colour and the change to a purple when the user hovers over an active link. The buttons on the blogs pages were at 
            the top of the page, this made it challenging for the user to navigate through the site because they would have to scroll to the 
            top of the page to get to the next page after reading their current page.    
            </p>

        </article>

        <div className='Links'>
            <div className='linkLeft'>

              <a><Link to='/Reflection2'>Reflection 2</Link></a>
              </div>

            <div className='linkRight'>

              <a><Link to='/TechRef'>Tech Reflection</Link></a>
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
