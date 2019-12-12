import React, { Component } from 'react';
import HogCard from './HogCard';

export class HogsContainer extends Component {

	render() {

		return (

			<div className='ui cards'>

				{this.props.hogsArray.map(

					(hawg, index) => {

						if (!this.props.filterGreased) {

							return (< HogCard
								details={hawg}
								key={index}
							/>)

						} else {

							if (hawg.greased) {

								return (< HogCard
									details={hawg}
									key={index}
								/>)

							} else {

								return null

							}

						}

					}

				)}

			</div>

		);

	}

}

export default HogsContainer;
