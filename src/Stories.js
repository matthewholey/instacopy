import React, {Component} from 'react';
import Story from './Story';

class Stories extends Component {
	render() {
		return (
			<div className="Stories">
				{/*<strong className="storiesLeft">Stories</strong>
				<strong className="storiesRight">Watch All</strong>*/}
				<Story user={"Insta Model #1"} />
				<Story user={"Athlete #2"} />
				<Story user={"photengenic friend #3"} />
				<Story user={"Foodie #4"} />
				<Story user={"Your brother #5"} />
				<Story user={"Ex-girlfriend #6"} />
				<Story user={"Bill Murray #7"} />
			</div>

		);
	}
}

export default Stories;