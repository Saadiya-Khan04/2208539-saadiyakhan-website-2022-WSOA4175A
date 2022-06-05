import React, { Component } from 'react';
import '../styling/Blogs.css';
import { blogList } from '../tools/blogList';
import BlogItem from '../tools/blogItem';


export default class Blogs extends Component {
  render() {
    return (
      <div className='blogs'>

        <div className='blogTitle'> 
          <h1><i>Internet Art Blogs</i></h1>
        </div>

        <div className='blogList'>
          {blogList.map((blogItem, value) => {

            return(

              <BlogItem value={value} name={blogItem.name} link={blogItem.link} image={blogItem.image}/>
            )
          })}

        </div>
        
      </div>
    )
  }
}

