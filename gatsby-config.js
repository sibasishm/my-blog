module.exports = {
	siteMetadata: {
		title: 'The Righter',
		author: 'Siabsish Mohanty',
		description: 'My blog website',
		siteUrl: 'https://amazing-noether-7fb791.netlify.app/'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/content/blogs`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/content/blogs`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							backgroundColor: '#fafafa',
							maxWidth: 1035
						}
					}
				]
			}
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-netlify-cms'
	]
};
