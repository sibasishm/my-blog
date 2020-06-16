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
			<div>
				Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and{' '}
				<a href="https://www.netlifycms.org/">Netlify CMS</a>
			</div>
			<p>Handcrafted by {data.site.siteMetadata.author}, &copy; 2020</p>
		</footer>
	);
};

export default Footer;
