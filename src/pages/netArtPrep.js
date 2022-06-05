import React, { Component } from 'react';
import '../styling/allBlogs.css';
import {Link} from 'react-router-dom';

export default class netArtPrep extends Component {
  render() {
    return (
        <div className='blogPosts'>

        <div className='linkLeft'>

        <a><Link to='/Reflection'>=Reflection 1</Link></a>
        </div>

        <div className='linkRight'>

        <a><Link to='/NetArtPro'>NetArt Prototype=</Link></a>
        </div>


      <div className='headerBlogs'>
       <h1><i>Internet Artwork Prep</i></h1>
       <p><i>Prep work for Internet Art</i></p>
      </div>

      <div className='bodyBlogs'>
            <p>
            <u><i>Theme and Inspiration</i></u> <br></br>
            <br></br>
            Shockingly, it’s going to be space again. Mostly because I loved working on that particular
            theme, and colour scheme. I know for Assignment 1, I said that I wanted to explore different
            colour schemes, but I thought of a few really cool space ideas for this website, as “art”, I
            guess? I genuinely am in love with anything space related, it is a broad theme that allows a
            wide range of experimentation. It’s also very interesting to me.
            </p>
            <p>
            I explained my reasoning for a space themed website last year, and it was because of my
            love for it. I enjoy developing websites that are themed with topics that I find entertaining. I
            find space entertaining because I've always wanted to be an astronomer, but I found science
            quite challenging. I'd like to incorporate the things I love into my art pieces and websites.   
            </p>

            <p>
            <u><i>Ideas:</i></u> <br></br>
            <br></br>
            I have two options for now. Firstly, I think it would be cool to do the NASA picture of the day
            API. I like this idea because I did want to use it last year for my API but I didn't because it
            didn't produce data that I could've put into a graph. The only problem is that I dislike working
            with APIs. <br></br>
            <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">https://apod.nasa.gov/apod/astropix.html</a>

            </p>
            The next idea that I had in mind was trying to recreate the Stellarium website, but less
            complicated. 
            I would like to have an interactive constellation map, and when user’s click on a star, they
            can learn more about it. But I’m not too sure on how to implement it yet. <br></br>
            <a href="https://stellarium-web.org/" target="_blank" rel="noopener noreferrer">https://stellarium-web.org/</a>
            <p>

            </p>
          
      </div>

      <div className='linkMid'>

        <a><Link to='/Blogs'>=Blogs=</Link></a>
      </div>

  </div>
    )
  }
}
