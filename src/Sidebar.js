import React, {Component} from 'react';
import UserHeader from './UserHeader';
import Stories from './Stories.js';
import Sitemap from './Sitemap.js';

class Sidebar extends Component {
	render() {
		return (
			<div className="Sidebar">
				<UserHeader />
				<Stories />
				<Sitemap />
			</div>

		);
	}
}

export default Sidebar;