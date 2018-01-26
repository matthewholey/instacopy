import React, {Component} from 'react';
import Interaction from './Interaction.js';
import PhotoHeader from './PhotoHeader.js';

class PhotoTile extends Component {
	render() {
		return (
			<div className="PhotoTile">
				<PhotoHeader />
				<img src="http://www.allotsego.com/wp-content/uploads/2017/08/Bill-Murray.jpeg" alt="BillMurray"/>
				<Interaction />
			</div>
		);
	}
}

export default PhotoTile;