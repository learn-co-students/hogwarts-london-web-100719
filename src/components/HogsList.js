import React, { Component } from 'react';
import HogTile from './HogTile';




export default class HogsList extends Component {
  render() {
    return (
      <div >
          {this.props.hogs.map( (hog, index) => <HogTile hog = {hog} key = {index}/>)}
      </div>
    )
  }
}


