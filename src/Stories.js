import React, {Component} from 'react';
import Story from './Story';

class Stories extends Component {
	render() {
		return (
			<div className="Stories">
				{/*<strong className="storiesLeft">Stories</strong>
				<strong className="storiesRight">Watch All</strong>*/}
				<Story user={"Butt Model #1"} />
				<Story user={"Butt Model #2"} />
				<Story user={"Butt Model #3"} />
				<Story user={"Butt Model #4"} />
				<Story user={"Butt Model #5"} />
				<Story user={"Butt Model #6"} />
				<Story user={"Butt Model #7"} />
			</div>

		);
	}
}

export default Stories;