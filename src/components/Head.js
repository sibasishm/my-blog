import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Head = ({ title }) => {
	const data = useStaticQuery(query);
	return (
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			title={`${title} | ${data.site.siteMetadata.title}`}
		/>
	);
};

export default Head;
