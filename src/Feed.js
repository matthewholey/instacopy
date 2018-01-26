import React, {Component} from 'react';
import PhotoTile from './PhotoTile.js';

class Feed extends Component {
	render() {
		return (
			<div className="Feed">
				{/*logic here to render a list of phototiles*/}
				<PhotoTile />
			</div>

		);
	}
}

export default Feed;