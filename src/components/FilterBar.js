import React, { Component } from 'react';

export default class FilterBar extends Component {


    render(){
        return(
            <div>
                Greased: <select onChange = {this.props.filterGreasedHogs}> 
                    <option value = "all"> All </option>
                    <option value = "greased"> Greased </option>
                    <option value = "ungreased"> Ungreased </option>
                </select> 
                Sort by: <select onChange = {this.props.sortedBy}>
                    <option value = "name"> Name </option>
                    <option value = "weight"> Weight </option>
                    </select> 
                
            </div>
        )
    }

}