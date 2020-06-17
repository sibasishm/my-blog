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
		<footer className="bg-gray-800 text-gray-500 mt-8 py-16 text-center">
			<div>
				Built with{' '}
				<a href="https://www.gatsbyjs.org" className="text-gray-200">
					Gatsby
				</a>{' '}
				and{' '}
				<a href="https://www.netlifycms.org/" className="text-gray-200">
					Netlify CMS
				</a>
			</div>
			<p className="mt-2">
				Handcrafted by{' '}
				<span className="text-gray-200">
					{data.site.siteMetadata.author}
				</span>
				, &copy; 2020
			</p>
		</footer>
	);
};

export default Footer;
