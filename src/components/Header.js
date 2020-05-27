import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
	<header>
		<h1>
			<Link to="/">Sibasish M</Link>
		</h1>
		<nav>
			<ul>
				<li>
					<Link to="/blog">Blogs</Link>
				</li>
				<li>
					<Link to="/about">About me</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
