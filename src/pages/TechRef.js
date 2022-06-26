import React, { Component } from 'react';
import '../styling/allBlogs.css';
import {Link} from 'react-router-dom';

export default class TechRef extends Component {
  render() {
    return (
        <section className='blogPosts'>

        <section className='headerBlogs'>

          <div class="h-feed">
            <h1 class="p-name"><i> Exam Technical Reflection</i></h1>
            <p><i>In-depth technical reflection about website and the process</i></p>
          </div>
            
        </section>

        <article className='bodyBlogs'>
                
            <p class="p-summary">
            <h2><u>Components:</u></h2>
            I have two very basic components to my website. A static navigation bar and a footer. I decided to make my 
            navigation bar static because it is a simple aspect on the website. I would have liked to make it dynamic, it would 
            scroll down the page with the user. Although I did not because I like the simplicity of it. In my opinion, it is not 
            the best when it comes to ease of user experience, but it is there to help with site-wide navigation. 
            </p>

            <p>
            The footer is solely just to make the site look more full. I would add social media links and business 
            information in the footer when I make specific accounts for the information that I would direct the users to. 
            For now, it is blank and not interactable.    
            </p>

            <p>
            <h2><u>Tools:</u></h2>
            These are my arrays. I have two different arrays for pages on my site. I decided to create these arrays to keep the 
            website looking clean without unnecessary information that is clustered on certain pages. They also help in allowing 
            me to add more of the similar type of content with ease, rather than hard-coding certain bits of information. 
            The array is created in one script, and then displayed by use of props. 
            </p>

            <p>
            The first array is for my blog posts. The array contains the post’s title, the link to it and an image. 
            These are displayed on floating boxes, with a purple backlight. The images are from the hubble telescope website. 
            The links take the user to the entire blog post. 
            </p>

            <p>
            The next array is exactly like the previous one, although I use it for my Net Art. This array displays an image and a 
            link only. The images are of the planets and the link is the planet’s name, which takes the user to an information 
            page of that specific planet.    
            </p>

            <p>
            <h2><u>Styling:</u></h2>
            A lot of my formatting is done in CSS. There are 2 scripts that style multiple pages. These are for my blogs pages and 
            the planets pages. It is easier to have one script to style these multiple pages, rather than having individual 
            stylesheets. 
            </p>

            <p>
            <h2><u>Process:</u></h2>
            Originally, I did not make use of arrays. I displayed my blog posts as multiple links beneath each other, 
            separated by a line. This looked rather messy, as it was just a lot of text on a page. I decided to use the array 
            and the boxes to make it look better, as well as less reading because the blogs are a lot of reading as it is.
            </p>

            <p>
            For the Net Art, I managed to compress the images of the planets. In the previous assignment they were quite big and 
            this caused slow loading times for the pages. I ran them through a website to compress the file size, as well as 
            styled them to appear smaller using CSS. I also changed the image of Saturn and cropped it so that it fits in the 
            floating circles, Saturn’s rings would overlap the circle.
            </p>

            <p>
            I used a lot of “br” tags in my previous assignments for line breaks between paragraphs and sentences. 
            For this iteration, I have removed the majority of the tags, now they only separate certain images and headings.
            </p>

            <p>
            I did not have any semantic markup in my previous iterations. I only had “div” tags. 
            I have now added some “article” and “section” tags to my blogs.
            </p>

            <p>
            I did not have any microformatting before this submission. I have added a few tags here and there to make 
            certain parts of my site easier to find, especially the blogs. I added “h-feed”, “p-name” and “p-summary”. 
            </p>

            <p>
            I did want to add a “Read more” button to the blogs, so that there would be less information on the page when 
            loading in. It would be less overwhelming for the user, and they can choose to read more. This would make use 
            of the "UseState", although I was slightly confused on how to implement it. So I decided to leave it out for now.
            </p>

            <p>
            I do struggle quite a bit with coding, so I decided to focus mainly on my creativity and theoretical sections. 
            I would like to learn more about states and props, as well as implementing more complex arrays. For now, 
            I wanted to focus on making a creative website that is easy to interact with, as well as looking really good.    
            </p>


           
        </article>

        <div className='Links'>
            <div className='linkLeft'>

              <a><Link to='/DesignRef'>Design Reflection</Link></a>
              </div>

            <div className='linkRight'>

              <a><Link to='/FRef'>Final Rationale</Link></a>
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
