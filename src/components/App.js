import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer';
import FilterButton from './FilterButton';
import SortButton from './SortButton';

export default class App extends Component {

	state = {

		filterByGreased: false,
		sortByName: false,
		hogs: hogs

	}

	apiKey = 'K8AswmcZBPDbwQ5U8PHobbLfi14Eaxrx';

	componentDidMount() {

		let arr = this.assignGifUrls()
		this.setState({
			hogs: arr
		})

	}

	assignGifUrls = () => {

		let arr = [...this.state.hogs]
		arr.map(

			async element => {

				let oof = await fetch(`https://api.giphy.com/v1/gifs/search?q=pigs&api_key=${this.apiKey}&rating=g`)
				let res = await oof.json()
				let url = `https://i.giphy.com/media/${res.data[Math.floor(Math.random() * 25)].id}/giphy.webp`

				element['imgUrl'] = url

			}

		)

		return arr



	}
	
	handleFilterToggle = () => {

		this.setState({filterByGreased: !this.state.filterByGreased})

	}
	
	handleSortToggle = () => {

		this.setState({sortByName: !this.state.sortByName, hogs: this.sortByKey(this.state.hogs, this.state.sortByName ? 'weight' : 'name')})

	}

	sortByKey = (array, key) => {

		return array.sort((a, b) => {

			let x = a[key]
			let y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));

		});

	}



	render() {

		console.log('oof')

		return (

			<div className="App">

				< Nav />
				< FilterButton
					filterGreased={this.state.filterByGreased}
					handleFilterToggle={this.handleFilterToggle}
				/>
				< SortButton
					sortByName={this.state.sortByName}
					handleSortToggle={this.handleSortToggle}
				/>
				< HogsContainer
					hogsArray={this.state.hogs}
					filterGreased={this.state.filterByGreased}
				/>

			</div>

		)

	}

}