import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<>
			<div className="header-wrapper">
				<div className="header-logo">
					<Link to={'/'}>
						<h1>Ancien peuple</h1>
					</Link>
				</div>
				<nav>
					<ul>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Header;
