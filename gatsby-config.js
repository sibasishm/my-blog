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
				path: `${__dirname}/content/blogs`
			}
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							backgroundColor: '#fafafa',
							maxWidth: 1250,
							linkImagesToOriginal: false,
							showCaptions: true,
							markdownCaptions: true
						}
					}
				]
			}
		},
		'gatsby-plugin-netlify-cms'
	]
};
