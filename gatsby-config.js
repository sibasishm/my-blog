module.exports = {
	siteMetadata: {
		title: 'The Righter',
		author: 'Siabsish Mohanty',
		description: 'My blog website'
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 700,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
