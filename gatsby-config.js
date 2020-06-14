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
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/content/blogs`
			}
		}
	]
};
