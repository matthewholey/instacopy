import React, {Component} from 'react';

class Nav extends Component {
	render() {
		return (
			<nav>
				<div className="insta-icon">
					<i class="fa fa-instagram icon-8x" aria-hidden="true"></i>
				</div>
				<div className="icon-links">
					<i class="fa fa-compass" aria-hidden="true"></i>
					<i class="fa fa-heart" aria-hidden="true"></i>
					<i class="fa fa-user" aria-hidden="true"></i>
				</div>
			</nav>
		)
	}
}

export default Nav;