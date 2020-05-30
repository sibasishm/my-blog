import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<header>
			<h1 className="text-4xl tracking-wider">
				<Link to="/">{data.site.siteMetadata.title}</Link>
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
};

export default Header;
