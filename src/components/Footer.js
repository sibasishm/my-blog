import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		site {
			siteMetadata {
				author
			}
		}
	}
`;

const Footer = () => {
	const data = useStaticQuery(query);
	return (
		<footer>
			<p>Handcrafted by {data.site.siteMetadata.author}, &copy; 2020</p>
		</footer>
	);
};

export default Footer;
