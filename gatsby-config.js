require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: 'The Righter',
		author: 'Siabsish Mohanty',
		description: 'My blog website'
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: 'http://localhost:1337',
				queryLimit: 1000,
				contentTypes: ['blogs']
			}
		}
	]
};
