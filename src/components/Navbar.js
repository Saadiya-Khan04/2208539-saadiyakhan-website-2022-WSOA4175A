import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import '../styling/Navbar.css';

export default class Navbar extends Component {

    render() {
    return (
      <div className='navbar'>

          <div className='rightside'>  
            <Link to='/'> Home </Link>
            <Link to='/spaceart'> Net Art </Link>
            <Link to='/blogs'> Blogs </Link>
            <Link to='/about'> Why/How? </Link>
          </div>
      </div>
    )
  }
}
