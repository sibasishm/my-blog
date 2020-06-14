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
				apiURL:
					process.env.NODE_ENV === 'development'
						? 'http://localhost:1337'
						: 'https://dry-crag-01905.herokuapp.com',
				queryLimit: 1000,
				contentTypes: ['blogs']
			}
		}
	]
};
