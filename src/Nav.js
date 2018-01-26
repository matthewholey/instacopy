import React, {Component} from 'react';

class Nav extends Component {
	render() {
		return (
			<nav>
					<i class="fa fa-instagram icon-8x" aria-hidden="true"></i>
					<form><input type="text" placeholder="Search"/></form>
					<i class="fa fa-compass" aria-hidden="true"></i>
					<i class="fa fa-heart" aria-hidden="true"></i>
					<i class="fa fa-user" aria-hidden="true"></i>
			</nav>
		)
	}
}

export default Nav;