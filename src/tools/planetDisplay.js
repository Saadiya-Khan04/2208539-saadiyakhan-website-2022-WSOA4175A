import React, { Component } from 'react';

export default class planetDisplay extends Component {
  render() {
    return (
      
        <div className='planetDisplay'>
        <div style={{backgroundImage: `url(${this.props.image})`}}></div>
        <p>{this.props.link}</p>
    </div>
    )
  }
}
