module.exports = {
	siteMetadata: {
		title: 'The Righter',
		author: 'Siabsish Mohanty',
		description: 'My blog website'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/static/assets`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/content/blogs`
			}
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-netlify-cms',
		'gatsby-transformer-remark'
	]
};
