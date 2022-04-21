import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import '../styling/Navbar.css';

export default class Navbar extends Component {

    render() {
    return (
      <div className='navbar'>

          <div className='rightside'>  
            <Link to='/'> Home </Link>
            <Link to='/blogs'> Blogs </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            
          </div>
      </div>
    )
  }
}
