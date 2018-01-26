import React, {Component} from 'react';

class Story extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.user}</h1>
			</div>
		)
	}
}

export default Story;