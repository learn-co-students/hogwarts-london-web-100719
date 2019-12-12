import React, { Component } from 'react';
import HogDescription from './HogDescription';
import HogImg from './HogImg';

export default class HogTile extends Component {
    
    
    showDescription = (specialty, weight, medal, greased) => {
        console.log(specialty)
            {/* `Weight: ${weight}`
            `Heighest Medal Achieved: ${medal}`
            `Greased: ${greased === true ? "yes" : "no"}` */}
    }
    
    render() {
        let {greased, medal, name, specialty, weight} = this.props.hog
        const fileName = name.toLowerCase().replace(/ /g, '_')
        const src = require(`../hog-imgs/${fileName}.jpg`)
        console.log('source of image:', src)
    return (
      <div className = "pigTile" greased = {greased}>
        <h3 onClick = {() => this.showDescription(specialty, weight, medal, greased)}> {name}</h3>
        <HogImg src={src}/>

      </div>
    )
  }
}


