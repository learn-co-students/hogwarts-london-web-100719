import React, { Component } from 'react';
import HogDescription from './HogDescription';
import HogImg from './HogImg';

export default class HogTile extends Component {
    
    state ={
        togglePic: true
    }
    
    
    render() {
        const fileName = this.props.hog.name.toLowerCase().replace(/ /g, '_')
        const src = require(`../hog-imgs/${fileName}.jpg`)
    return (
      <div className = "pigTile" greased = {this.props.hog.greased}>
        <h3 onClick = {() => this.setState({togglePic: !this.state.togglePic})}> {this.props.hog.name}</h3>
        {this.state.togglePic ? <HogImg src={src}/> : <HogDescription hog = {this.props.hog} />}

      </div>
    )
  }
}


