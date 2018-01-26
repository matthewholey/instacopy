import React, {Component} from 'react';

class PhotoHeader extends Component {
	render() {
		return (
			<div className="PhotoHeader">
				<img />
				<p>
					<strong>post.username</strong>
				</p>
				<br />
				<p>city, state</p>
			</div>
		);
	}
}

export default PhotoHeader;