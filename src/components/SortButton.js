import React, { Component } from 'react';

export default class SortButton extends Component {

	render() {

		return (

			<div>

				<button onClick={this.props.handleSortToggle}>
					{this.props.sortByName ? 'Sorting By: Name' :
					'Sorting By: Weight'}
				</button>

			</div>

		);

	}

}
