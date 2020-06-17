import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Header = () => {
	const data = useStaticQuery(query);
	return (
		<header>
			<h1 className="uppercase text-5xl md:text-7xl tracking-widest text-center">
				{data.site.siteMetadata.title}
			</h1>
			<nav>
				<div className="flex justify-evenly border-2 border-r-0 border-l-0 border-gray-900 text-gray-600 tracking-wide">
					<Link
						to="/"
						className="p-4 lg:px-16 hover:text-gray-700"
						activeClassName="text-gray-900 font-bold"
					>
						Home
					</Link>
					<Link
						to="/blog"
						className="p-4 lg:px-16 hover:text-gray-700"
						activeClassName="text-gray-900 font-bold"
					>
						Blogs
					</Link>
					<Link
						to="/about"
						className="p-4 lg:px-16 hover:text-gray-700"
						activeClassName="text-gray-900 font-bold"
					>
						About
					</Link>
					<Link
						to="/contact"
						className="p-4 lg:px-16 hover:text-gray-700"
						activeClassName="text-gray-900 font-bold"
					>
						Contact
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
